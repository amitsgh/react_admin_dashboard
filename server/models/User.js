import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            maxlength: 100,
            validate: {
                validator: function (v) {
                    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
                        v
                    );
                },
                message: 'Invalid email format',
            },
        },
        password: {
            type: String,
            unique: true,
            required: true,
            minlength: 5,
        },
        city: {
            type: String,
            maxlength: 100,
        },
        state: {
            type: String,
            maxlength: 100,
        },
        country: {
            type: String,
            maxlength: 100,
        },
        occupation: {
            type: String,
            maxlength: 100,
        },
        phoneNumber: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}$/.test(v);
                },
                message: 'Invalid phone number format (10 digits)',
            },
        },
        transactions: {
            type: [mongoose.Schema.Types.ObjectId],
            validate: {
                validator: function (v) {
                    return v.every(mongoose.Types.ObjectId.isValid);
                },
                message: 'Invalid transactions format',
            },
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'superadmin'],
            default: 'admin',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
