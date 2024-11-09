import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Games',
})
export class Game extends Model {
    
    // Game ID
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    // Game logo stored as binary data
    @Column({
        type: DataType.BLOB("long"), 
        allowNull: true,
    })
    declare logo?: Buffer;

    // Game name
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    // Game publisher
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare publisher?: string;

    // Game description
    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    declare description?: string;

    // UUID-formatted Unique Tracking ID for the Game
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare UTID: string;

    // Timestamp of game creation
    @CreatedAt
    declare createdAt: Date;

    // Last updated timestamp
    @UpdatedAt
    declare updatedAt: Date;
}
