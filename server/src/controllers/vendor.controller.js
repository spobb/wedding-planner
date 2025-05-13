import { Vendor, Wedding } from "#models";

class VendorController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const vendors = await Vendor.find().populate();

            if (!vendors) {
                return res.status(404).json({ message: 'No vendors!' });
            }

            return res.status(200).json(vendors);
        } catch (err) {
            next(err)
        }
    }

    async get(req, res, next) {
        try {
            const vendor = await Vendor.findById(req.params.id).populate();

            if (!vendor) {
                return res.status(404).json({ message: 'No vendor with this ID found!' });
            }

            return res.status(200).json(vendor);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const vendor = new Vendor({ ...req.body });

            await vendor.save();

            await Wedding.findByIdAndUpdate(vendor.wedding, { $push: { vendors: vendor._id } });

            return res.status(201).json(vendor);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const vendor = await Vendor.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!vendor) {
                return res.status(404).json({ message: 'No vendor with this ID found!' });
            }

            return res.status(200).json(vendor);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const vendor = await Vendor.findByIdAndDelete(req.params.id);

            if (!vendor) {
                return res.status(404).json({ message: 'No vendor with this ID found!' });
            }

            return res.status(200).json(vendor);
        } catch (err) {
            next(err);
        }
    };
}

export default new VendorController();