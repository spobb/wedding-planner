import 'dotenv/config.js';
import { User } from '#models/user.model.js';
import { generateToken, comparePassword } from '#services/auth.service.js';

class AuthController {
    constructor() { }

    async register(req, res, next) {
        try {
            const user = new User({ ...req.body })
            await user.save();

            const token = generateToken(user);

            delete user._doc.password;
            return res.status(201).json({ data: user, token });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email }).exec();
            if (!user) {
                return res.status(401).json({ message: 'Error: Invalid credentials' });
            }

            const credentials = await comparePassword(req.body.password, user.password);
            if (!credentials) {
                return res.status(401).json({ message: 'Error: Invalid credentials' });
            }

            const token = generateToken(user);
            return res.status(201).json({ data: user._id, token });
        } catch (err) {
            next(err);
        }
    }

    async me(req, res, next) {
        try {
            const user = await User.findById(req.user._id).select('email role');

            return res.status(200).json({ user: user });
        } catch (err) {
            next(err);
        }
    }
};

export default new AuthController();