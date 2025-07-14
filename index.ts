import { app } from '~/app';
import { PORT } from '~/config';
import { logger } from '~/utils/logger';

function bootstrapApp() {
  app.listen(PORT, () => {
    logger.info(`Server is listening on ${PORT}`);
  });
}

bootstrapApp();
