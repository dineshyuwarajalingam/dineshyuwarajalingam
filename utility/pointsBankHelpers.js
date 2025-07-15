const { PointsBank } = require('../db');

function convertAmountToPoints(amount) {
    return Math.ceil(amount * 100); // Example: 1 point = $0.01
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
    deductUserPoints
};