import { Controller, Response } from 'express';

import bcrypt from 'bcrypt';

import Users from '../../../database/models/Users';

import { UserRequest } from './types';

class UserController implements Controller {
  async index(req: UserRequest, res: Response): Promise<Response> {
    const { orderBy, orderName, page, quantity } = req.filters;

    const { rows: users, count } = await Users.findAndCountAll({
      limit: quantity,
      offset: (page - 1) * quantity,
      attributes: {
        exclude: ['password_hash'],
      },
      order: [[orderName, orderBy]],
    });

    if (!users) {
      return res.status(400).json({
        error: 'Usuário não encontrado!',
      });
    }

    return res.set({ 'Total-pages': Math.ceil(count / quantity) }).json(users);
  }

  async store(req: UserRequest, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const findUser = await Users.findOne({
      where: { email },
    });

    if (findUser) {
      return res.status(400).json({
        error: 'E-mail já cadastrado!',
      });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const response = await Users.create({
      ...req.body,
      password_hash,
    });

    return res.json(response);
  }
}

export default UserController;
