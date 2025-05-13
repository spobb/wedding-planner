import { Router } from 'express';
import { VendorController } from '#controllers';

const router = Router();

router.route('/')
    .get(VendorController.getAll)
    .post(VendorController.create);

router.route('/:id')
    .get(VendorController.get)
    .put(VendorController.update)
    .delete(VendorController.delete);

export default router;