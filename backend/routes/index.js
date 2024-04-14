import { Router } from 'express';

import indexController from '../controller/indexController.js';

const router = Router();

router.get('/', indexController.GetIndex);

export default router;
