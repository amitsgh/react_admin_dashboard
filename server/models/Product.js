import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 255,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        description: {
            type: String,
            maxlength: 1000,
        },
        category: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        supply: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
