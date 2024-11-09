import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Teams',
})
export class Team extends Model {
    
    // Team ID
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    // Team logo stored as binary data
    @Column({
        type: DataType.BLOB("long"),
        allowNull: true,
    })
    declare logo?: Buffer;

    // Team name
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    // Team Members (array of player IDs)
    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: true,
        defaultValue: [],
    })
    declare members: number[];

    // Team Twitter handle
    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: '',
    })
    declare twitterHandle?: string;

    // UUID-formatted Unique Tracking ID for the Team
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
    })
    declare UTID: string;

    // Timestamp of Team creation
    @CreatedAt
    declare createdAt: Date;

    // Last updated timestamp
    @UpdatedAt
    declare updatedAt: Date;
}
