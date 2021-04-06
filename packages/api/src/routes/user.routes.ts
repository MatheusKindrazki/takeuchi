import { Router } from 'express';

import UserController from '../app/controllers/UserController';

import UserValidatorStore from '../app/validators/UserController/UserStore';

const userRoutes = Router();

const User = new UserController();

userRoutes.get('/', User.index);
userRoutes.post('/', UserValidatorStore, User.store);

export default userRoutes;
