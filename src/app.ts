import express from 'express';
import cors from 'cors';

import api from './api';
import { NODE_ENV } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', api);
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err?.status ?? 500).json({
    message: err.message ?? 'Something went wrong',
    ...(NODE_ENV === 'development' && { stack: err.stack }),
  });
});

export { app };
