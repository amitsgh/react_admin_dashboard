/*
1. Foundation for handling HTTP requests and Routing with Express
2. Security measures with Helmet Middleware
3. Setting Cross Origin Resource Sharing wiht CORS
4. Setting Morgan for HTTP requests log
5. Parsing JSON & Url encoded format with body-parser
6. Setting connection to MongoDB with mongoose
7. Organizing routes for client, general, management, sales
*/

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

// data import
// import User from './models/User.js'
// import { dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat, geoData } from './data/index.js';
// import Product from './models/Product.js';
// import ProductStat from './models/ProductStat.js';
// import Transaction from './models/Transaction.js';
// import OverallStat from './models/OverAllStat.js';
// import AffiliateStat from './models/AffiliateStat.js';
// import Country from './models/Country.js';

//Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

//Server SetUp
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const MONGODB_URI = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to mongodb database`);

        // Insert One time only to avoid duplication
        // await User.insertMany(dataUser);
        // await Product.insertMany(dataProduct);
        // await ProductStat.insertMany(dataProductStat);
        // await Transaction.insertMany(dataTransaction);
        // await OverallStat.insertMany(dataOverallStat);
        // await AffiliateStat.insertMany(dataAffiliateStat);
        // await Country.insertMany(geoData);
    } catch (error) {
        console.error(`failed to connect to MongoDB: ${error}`);
        process.exit(1);
    }
};

const startServer = async () => {
    await connectToMongoDB();

    app.listen(PORT, HOST, () => {
        console.log(`server started at http://${HOST}:${PORT}`);
    });
};

startServer();
