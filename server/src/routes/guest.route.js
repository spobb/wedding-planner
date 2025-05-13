import { Router } from 'express';
import { GuestController } from '#controllers';

const router = Router();

router.route('/')
    .get(GuestController.getAll)
    .post(GuestController.create);

router.route('/:id')
    .get(GuestController.get)
    .put(GuestController.update)
    .delete(GuestController.delete);

export default router;