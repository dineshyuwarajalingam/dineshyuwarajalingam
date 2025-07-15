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

const ConversionRate = sequelize.define('ConversionRate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

async function initDb() {
    await sequelize.authenticate();
    await sequelize.sync();
}

module.exports = {
    sequelize,
    PointsBank,
    ConversionRate,
    initDb
};
