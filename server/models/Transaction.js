import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        cost: {
            type: String,
            required: true,
            match: /^[0-9]+(\.[0-9]{1,2})?$/,
        },
        products: {
            type: [mongoose.Types.ObjectId],
            of: Number,
            required: true,
            validate: {
                validator: (value) => value.length > 0,
                message: 'Products array must contain at least one product.',
            },
        },
    },
    { timestamps: true }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
