import { Router } from 'express';
import { BudgetController } from '#controllers';

const router = Router();

router.route('/')
    .get(BudgetController.getAll)
    .post(BudgetController.create);

router.route('/:id')
    .get(BudgetController.get)
    .put(BudgetController.update)
    .delete(BudgetController.delete);

export default router;