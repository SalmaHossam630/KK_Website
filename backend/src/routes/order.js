import express from 'express';
const router = express.Router();

import order from '../controllers/order';

router.get('/orders', order.get);
router.get('/order/:userId', order.getById);
router.post('/newOrder', order.post);
router.put('/upateOrder', order.put);
router.delete('/order/:userID', order.deleteById);

export default router;

