import { Router } from 'express';
import TaskController from '#controllers/task.controller.js';
import { auth } from '#middlewares/auth.middleware.js';

const router = Router();

router.route('/').all(auth)
    .get(TaskController.getAll)
    .post(TaskController.create);

router.route('/:id').all(auth)
    .get(TaskController.get)
    .put(TaskController.update)
    .delete(TaskController.delete);

export default router;