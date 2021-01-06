import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const userRoutes = Router();

const User = new UserController();

userRoutes.get('/', User.index);

export default userRoutes;
