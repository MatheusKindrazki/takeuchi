import { Controller, Response, Request } from 'express';

import Users from '../../database/models/Users';

class UserController implements Controller {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await Users.findAll();

    return res.json(users);
  }
}

export default UserController;
