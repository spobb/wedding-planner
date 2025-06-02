import { Task, Wedding } from "#models";

class TaskController {
    constructor() { }

    async getAll(req, res, next) {
        try {
            const tasks = await Task.find().populate();

            if (!tasks) {
                return res.status(404).json({ message: 'No tasks!' });
            }

            return res.status(200).json(tasks);
        } catch (err) {
            next(err)
        }
    }

    async get(req, res, next) {
        try {
            const task = await Task.findById(req.params.id).populate();

            if (!task) {
                return res.status(404).json({ message: 'No task with this ID found!' });
            }

            return res.status(200).json(task);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const task = new Task({ ...req.body });

            await task.save();

            await Wedding.findByIdAndUpdate(task.wedding, { $push: { tasks: task._id } });

            return res.status(201).json(task);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const task = await Task.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

            if (!task) {
                return res.status(404).json({ message: 'No task with this ID found!' });
            }

            return res.status(200).json(task);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const task = await Task.findByIdAndDelete(req.params.id);

            if (!task) {
                return res.status(404).json({ message: 'No task with this ID found!' });
            }

            return res.status(200).json(task);
        } catch (err) {
            next(err);
        }
    };
}

export default new TaskController();