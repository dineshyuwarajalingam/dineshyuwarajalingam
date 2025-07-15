const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('pointsdb', 'myuser', 'mypassword', {
    host: 'localhost',
    dialect: 'postgres',
});

const PointsBank = sequelize.define('PointsBank', {
    user_token: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
});

async function initDb() {
    await sequelize.authenticate();
    await PointsBank.sync();
}

module.exports = {
    sequelize,
    PointsBank,
    initDb
};
