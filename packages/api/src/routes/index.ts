import { Router } from 'express';

import filterMiddleware from '../app/middlewares/filters';

import userRoutes from './user.routes';

const routes = Router();

routes.use(filterMiddleware as any);

routes.use('/users', userRoutes);

export default routes;
