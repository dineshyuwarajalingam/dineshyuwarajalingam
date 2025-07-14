import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '~/db/connect';

export const User = sequelize.define('User', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cards: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});
