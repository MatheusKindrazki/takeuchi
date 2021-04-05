import { Sequelize } from 'sequelize-typescript';

import 'dotenv/config';

import path from 'path';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  define: {
    timestamps: true,
    underscored: true,
  },
  models: [path.resolve(__dirname, '..', 'database', 'models')],
});
