import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
class Users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  password_hash: string;

  @Column({
    unique: true,
  })
  email: string;
}

export default Users;
