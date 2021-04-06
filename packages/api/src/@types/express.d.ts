import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      filters: {
        page: number;
        quantity: number;
        orderName: string;
        orderBy: string;
      };
    }
  }
}
