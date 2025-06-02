import { verifyToken } from '#services/auth.service.js';
import { User } from '#models/user.model.js';

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Error: Unauthorized' });
        }

        const decoded = await verifyToken(token);
        if (!decoded) {
            return res.status(403).json({ message: 'Error: Forbidden' });
        }
        const user = await User.findById(decoded.userId);
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
}