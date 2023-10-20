import OverallStat from '../models/OverAllStat.js';

export const getSales = async (req, res) => {
    try {
        const overallStats = await OverallStat.findOne();
        if (!overallStats) {
            return res.status(404).json({ message: 'Overall stats not found' });
        }

        res.status(200).json(overallStats);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
