import { Router } from 'express';
import Authorization from './../middlewares/Authorization.js';

const router = Router();

router.get('/', Authorization, async (req, res, next) => {
    res.send(`this route is protected`);
});

export default router;
