import countryIso2To3 from 'country-iso-2-to-3';
import Country from '../models/Country.js';
import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';

const generateSort = (sort) => {
    if (!sort) return {};

    const sortParsed = JSON.parse(sort);
    return {
        [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
    };
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                });

                debugger;
                
                return {
                    ...product._doc,
                    stat,
                };
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: 'user' }).select('-password');
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;

        const sortFormatted = generateSort(sort);

        const transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, 'i') } },
                { userId: { $regex: new RegExp(search, 'i') } },
            ],
        })
            .sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize);

        const totalDoc = await Transaction.countDocuments({
            $or: [
                { cost: { $regex: new RegExp(search, 'i') } },
                { userId: { $regex: new RegExp(search, 'i') } },
            ],
        });

        res.status(200).json({
            transactions,
            totalDoc,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getGeography = async (req, res) => {
    try {
        const user = await User.find();

        const mappedLocation = user.reduce((acc, { country }) => {
            const countryISO3 = countryIso2To3(country);

            if (!acc[countryISO3]) {
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        }, {});

        const formattedLocations = Object.entries(mappedLocation).map(
            ([country, count]) => {
                return { id: country, value: count };
            }
        );

        res.status(200).json(formattedLocations);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getGeoData = async (req, res) => {
    try {
        const geoData = await Country.find();
        res.status(200).json(geoData);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
