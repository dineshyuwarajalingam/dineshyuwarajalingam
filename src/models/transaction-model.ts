import { DataTypes } from 'sequelize';
import { sequelize } from '~/db/connect';

export const Transaction = sequelize.define('Transaction', {
  transaction_id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  card_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payload: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});
