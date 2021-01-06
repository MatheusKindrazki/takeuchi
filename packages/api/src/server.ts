import { createServer } from 'http';
import app from './app';

import { sequelize } from './config/database';

(async () => {
  const port = process.env.PORT || 3333;

  await sequelize.sync({ force: true, logging: false });

  createServer(app).listen(port, () =>
    console.info(`Servidor rodando na porta ${port}`),
  );
})();
