import { Wedding } from "#models";

class WeddingController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const weddings = await Wedding.find().populate('guests', '-wedding').populate('budgets', '-wedding');

            if (!weddings) {
                return res.status(404).json({ message: 'No weddings!' });
            }

            return res.status(200).json(weddings);
        } catch (err) {
            next(err)
        }
    }

    async get(req, res, next) {
        try {
            const wedding = await Wedding.findById(req.params.id);

            if (!wedding) {
                return res.status(404).json({ message: 'No wedding with this ID found!' });
            }

            return res.status(200).json(wedding);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const wedding = new Wedding({ ...req.body });

            await wedding.save();

            return res.status(201).json(wedding);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const wedding = await Wedding.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!wedding) {
                return res.status(404).json({ message: 'No wedding with this ID found!' });
            }

            return res.status(200).json(wedding);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const wedding = await Wedding.findByIdAndDelete(req.params.id);

            if (!wedding) {
                return res.status(404).json({ message: 'No wedding with this ID found!' });
            }

            return res.status(200).json(wedding);
        } catch (err) {
            next(err);
        }
    };

    async addGuest(req, res, next) {
        try {
            const wedding = await Wedding.findById(req.params.id);

            if (!wedding) {
                return res.status(404).json({ message: 'No wedding with this ID found!' });
            }

            wedding.guests.push(req.body.guestId);
            await wedding.save();

            return res.status(200).json(wedding);
        } catch (err) {
            next(err);
        }
    }
    async getGuests(req, res, next) {
        try {
            const wedding = await Wedding.findById(req.params.id).populate('guests', '-_id -wedding');

            if (!wedding) {
                return res.status(404).json({ message: 'No wedding with this ID found!' });
            }

            return res.status(200).json(wedding.guests)
        } catch (err) {
            next(err);
        }
    }
}

export default new WeddingController();