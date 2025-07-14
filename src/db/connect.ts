import { Sequelize } from 'sequelize';
import { DATABASE_URL } from '~/config';
import { logger } from '~/utils/logger';

const connectDB = async () => {
  const sequelize = new Sequelize(DATABASE_URL);

  await new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
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
