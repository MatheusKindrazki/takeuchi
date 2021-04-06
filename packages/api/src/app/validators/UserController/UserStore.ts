import { Response, Request, NextFunction } from 'express';

import * as Yup from 'yup';

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<unknown> => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      password: Yup.string()
        .min(6, 'Senha muito pequena')
        .required('Senha Obrigatória!'),
      email: Yup.string()
        .email('E-mail Inválido!')
        .required('E-mail Obrigatório!'),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: error.inner });
  }
};
