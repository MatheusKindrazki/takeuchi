import { AlterRequest, NextFunction } from 'express';

type QueryRequest = AlterRequest & {
  query: {
    page?: number;
    quantity?: number;
    orderName?: string;
    orderBy?: string;
  };
};

export default (req: QueryRequest, _: unknown, next: NextFunction): unknown => {
  const page = req.query.page || 1;
  const quantity = req.query.quantity || 20;
  const orderBy = req.query.orderBy || 'asc';
  const orderName = req.query.orderName || 'created_at';

  req.filters = {
    page,
    quantity,
    orderName,
    orderBy,
  };

  return next();
};
