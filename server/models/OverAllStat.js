import mongoose from 'mongoose';

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers: {
            type: Number,
            required: true,
        },
        yearlySalesTotal: {
            type: Number,
            required: true,
        },
        yearlyTotalSoldUnits: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        monthlyData: [
            {
                month: {
                    type: String,
                    required: true,
                },
                totalSales: {
                    type: Number,
                    required: true,
                },
                totalUnits: {
                    type: Number,
                    required: true,
                },
            },
        ],
        dailyData: [
            {
                date: {
                    type: String,
                    required: true,
                },
                totalSales: {
                    type: Number,
                    required: true,
                },
                totalUnits: {
                    type: Number,
                    required: true,
                },
            },
        ],
        salesByCategory: {
            type: Map,
            of: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const OverallStat = mongoose.model('OverallStat', OverallStatSchema);

export default OverallStat;
