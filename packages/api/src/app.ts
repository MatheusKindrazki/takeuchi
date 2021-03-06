import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
    exposedHeaders: 'Total-pages',
  }),
);

app.use(routes);

export default app;
