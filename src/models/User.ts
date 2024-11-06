// models/User.ts
import { UUID } from 'crypto';
import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Users',
})
export class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER, 
        autoIncrement: true,    
    })
    declare id: number; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}
