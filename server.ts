if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}

import { app } from '~/app';
import { PORT } from '~/config';
import { connectDB } from '~/db/connect';
import { logger } from '~/utils/logger';

function bootstrapApp() {
  app.listen(PORT, async () => {
    logger.info('Trying to establish db connection...');
    await connectDB();
    logger.info(`Server is listening on ${PORT}`);
  });
}

bootstrapApp();
