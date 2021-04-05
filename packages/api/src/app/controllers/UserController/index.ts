import { Controller, Response, Request } from 'express';

import bcrypt from 'bcrypt';

import Users from '../../../database/models/Users';

import { UserRequest } from './types';

class UserController implements Controller {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await Users.findAll({
      attributes: {
        exclude: ['password_hash'],
      },
    });

    if (!users) {
      return res.status(400).json({
        error: 'Usuário não encontrado!',
      });
    }

    return res.json(users);
  }

  async store(req: UserRequest, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const findUser = await Users.findOne({
      where: { email },
    });

    const password_hash = await bcrypt.hash(password, 10);

    if (findUser) {
      return res.status(400).json({
        error: 'E-mail já cadastrado!',
      });
    }

    return res.json({ password_hash });
  }
}

export default UserController;
