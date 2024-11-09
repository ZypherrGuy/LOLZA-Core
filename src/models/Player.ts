import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Players',
})
export class Player extends Model {

    // Player ID
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    // Player first name
    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: '',
    })
    declare firstName?: string;

    // Player last name
    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: '',
    })
    declare lastName?: string;

    // Player IGN (required)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare IGN: string;

    // Player email (unique)
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
        defaultValue: '',
    })
    declare email: string;

    // Player Team ID
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 0,
    })
    declare teamID?: number;

    // Player Team history (array of IDs)
    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: true,
        defaultValue: [],
    })
    declare teamHistory: number[];

    // Player Game Title Participation (array of strings)
    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: true,
        defaultValue: [],
    })
    declare games: number[];

    // Player Nationality
    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: '',
    })
    declare nationality?: string;

    // Player contact number
    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: '',
    })
    declare contactNumber?: string;

    // UUID-formatted Unique Tracking ID for the Player
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare UTID: string;

    // Timestamp of player creation
    @CreatedAt
    declare createdAt: Date;

    // Last updated timestamp
    @UpdatedAt
    declare updatedAt: Date;
}
