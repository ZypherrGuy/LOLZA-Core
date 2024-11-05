// src/models/User.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING, // Specify the data type
        allowNull: false,      // Specify constraints if needed
    })
    username!: string;

    @Column({
        type: DataType.STRING, // Specify the data type
        allowNull: false,      // Specify constraints if needed
        unique: true,          // Unique constraint if required
    })
    email!: string;
}
