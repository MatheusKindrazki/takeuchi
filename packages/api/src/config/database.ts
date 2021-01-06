import { Sequelize } from 'sequelize-typescript';

import 'dotenv/config';

import path from 'path';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'takeuchi',
  username: 'takeuchi',
  password: 'takeuchi',
  define: {
    timestamps: true,
    underscored: true,
  },
  models: [path.resolve(__dirname, '..', 'database', 'models')],
});
