import { Budget, Wedding } from "#models";

class BudgetController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const budgets = await Budget.find().populate();

            if (!budgets) {
                return res.status(404).json({ message: 'No budgets!' });
            }

            return res.status(200).json(budgets);
        } catch (err) {
            next(err)
        }
    }

    async get(req, res, next) {
        try {
            const budget = await Budget.findById(req.params.id).populate();

            if (!budget) {
                return res.status(404).json({ message: 'No budget with this ID found!' });
            }

            return res.status(200).json(budget);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const budget = new Budget({ ...req.body });

            await budget.save();

            await Wedding.findByIdAndUpdate(budget.wedding, { $push: { budgets: budget._id } });

            return res.status(201).json(budget);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const budget = await Budget.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!budget) {
                return res.status(404).json({ message: 'No budget with this ID found!' });
            }

            return res.status(200).json(budget);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const budget = await Budget.findByIdAndDelete(req.params.id);

            if (!budget) {
                return res.status(404).json({ message: 'No budget with this ID found!' });
            }

            return res.status(200).json(budget);
        } catch (err) {
            next(err);
        }
    };
}

export default new BudgetController();