import mongoose from 'mongoose';

const ProductStatSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 255,
        },
        yearlySalesTotal: {
            type: Number,
            required: true,
            min: 0,
        },
        yearlyTotalSoldUnits: {
            type: Number,
            required: true,
            min: 0,
        },
        year: {
            type: Number,
            required: false,
            min: 1900,
            max: new Date().getFullYear(),
        },
        monthlyData: [
            {
                month: {
                    type: String,
                    required: true,
                    trim: true,
                },
                totalSales: {
                    type: Number,
                    required: true,
                    min: 0,
                },
                totalUnits: {
                    type: Number,
                    required: true,
                    min: 0,
                },
            },
        ],
        dailyData: [
            {
                date: {
                    type: String,
                    required: true,
                    trim: true,
                },
                totalSales: {
                    type: Number,
                    required: true,
                    min: 0,
                },
                totalUnits: {
                    type: Number,
                    required: true,
                    min: 0,
                },
            },
        ],
    },
    { timestamps: true }
);

const ProductStat = mongoose.model('ProductStat', ProductStatSchema);
export default ProductStat;
