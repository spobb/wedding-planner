import { Guest, Wedding } from "#models";

class GuestController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const guests = await Guest.find().populate();

            if (!guests) {
                return res.status(404).json({ message: 'No guests!' });
            }

            return res.status(200).json(guests);
        } catch (err) {
            next(err)
        }
    }

    async get(req, res, next) {
        try {
            const guest = await Guest.findById(req.params.id).populate();

            if (!guest) {
                return res.status(404).json({ message: 'No guest with this ID found!' });
            }

            return res.status(200).json(guest);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const guest = new Guest({ ...req.body });

            await guest.save();

            await Wedding.findByIdAndUpdate(guest.wedding, { $push: { guests: guest._id } });

            return res.status(201).json(guest);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const guest = await Guest.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!guest) {
                return res.status(404).json({ message: 'No guest with this ID found!' });
            }

            return res.status(200).json(guest);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const guest = await Guest.findByIdAndDelete(req.params.id);

            if (!guest) {
                return res.status(404).json({ message: 'No guest with this ID found!' });
            }

            return res.status(200).json(guest);
        } catch (err) {
            next(err);
        }
    };
}

export default new GuestController();