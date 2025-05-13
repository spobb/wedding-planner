import { Router } from 'express';
import { WeddingController } from '#controllers';

const router = Router();

router.route('/')
    .get(WeddingController.getAll)
    .post(WeddingController.create);

router.route('/:id')
    .get(WeddingController.get)
    .put(WeddingController.update)
    .delete(WeddingController.delete);

router.route('/:id/guests')
    .get(WeddingController.getGuests)
    .post(WeddingController.addGuest)

export default router;