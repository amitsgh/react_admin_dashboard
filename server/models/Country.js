import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
    type: String,
    features: [
        {
            type: {
                type: String,
                enum: ['Feature'],
                required: true,
            },
            properties: {
                name: String,
            },
            geometry: {
                type: {
                    type: String,
                    enum: ['Polygon', 'MultiPolygon'],
                    required: true,
                },
                coordinates: [
                    [
                        [
                            [Number], // Longitude
                            [Number], // Latitude
                        ],
                    ],
                ],
            },
            id: String,
        },
    ],
});

const Country = mongoose.model('Country', countrySchema);
export default Country;
