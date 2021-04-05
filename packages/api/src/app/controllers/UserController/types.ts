import { Request } from 'express';

interface UserBodyStore {
  email: string;
  password: string;
}

export type UserRequest = Request<any, any, UserBodyStore>;
