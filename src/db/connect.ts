import { Sequelize } from 'sequelize';
import { DATABASE_URL } from '~/config';
import { logger } from '~/utils/logger';

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
});

const connectDB = async () => {
  await new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(async () => {
        await sequelize.sync({ force: false });
        logger.info('🟢 Database connected');
        resolve('🟢 Database connected');
      })
      .catch((err) => {
        logger.error(`🔴 Unable to connect: `, err);
        reject(`🔴 Unable to connect: ${err}`);
      });
  });
};

export { connectDB };
