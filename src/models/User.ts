// models/User.ts
import { UUID } from 'crypto';
import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Users',
})
export class User extends Model {

    // User ID data
    @Column({
        primaryKey: true,
        type: DataType.INTEGER, 
        autoIncrement: true,    
    })
    declare id: number; 

    // User name data
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    // User email data
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;

    // UUID formated Unique Tracking ID for user
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare UTID: UUID;

    // Timestamp of user creation
    @CreatedAt
    declare createdAt: Date;

    // Last updated timestamp
    @UpdatedAt
    declare updatedAt: Date;
}
