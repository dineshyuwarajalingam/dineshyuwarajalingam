const { PointsBank , ConversionRate} = require('../db');

async function getCurrentConversionRate() {
    const rateRecord = await ConversionRate.findOne({
        order: [['createdAt', 'DESC']]
    });

    if (!rateRecord) throw new Error('No conversion rate found');
    return rateRecord.rate;
}

async function convertAmountToPoints(amount) {
    const conversionRate = await getCurrentConversionRate();
    console.log(`Current conversion rate: ${conversionRate}`);
    return Math.ceil(amount * conversionRate);
}

async function getUserPoints(userToken) {
    const user = await PointsBank.findByPk(userToken);
    return user ? user.points : 0;
}

async function deductUserPoints(userToken, pointsToDeduct) {
    const user = await PointsBank.findByPk(userToken);

    if (user && user.points >= pointsToDeduct) {
        user.points -= pointsToDeduct;
        await user.save();
    } else {
        throw new Error('Insufficient points');
    }
}

module.exports = {
    convertAmountToPoints,
    getUserPoints,
    deductUserPoints,
    getCurrentConversionRate
};