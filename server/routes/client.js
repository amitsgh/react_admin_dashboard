import express from 'express';
import {
    getCustomers,
    getGeoData,
    getGeography,
    getProducts,
    getTransactions,
} from '../controllers/client.js';

const router = express.Router();
router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
router.get('/geography', getGeography);
router.get('/geo-data', getGeoData);

export default router;
