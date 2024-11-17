import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Tournaments',
})
export class Tournament extends Model {

    // Tournament ID
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    // Tournament name
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare title: string;

    // Tournament description
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
    })
    declare description: string;

    // UUID-formatted Unique Tracking ID for the tournament
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare UTID: string;

    // Tournament status (e.g., 'Coming Soon', 'Registrations Open', 'In Progress', 'Completed')
    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'Coming Soon',
    })
    declare status: string;

    // Number of participants
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    declare participants: number;

    // Prizepool decimal for currency accuracy
    @Column({
      type: DataType.DECIMAL(10, 2), 
      allowNull: false,
      defaultValue: 0.00,
    })
    declare prizePool: number;

    // Registration open date
    @Column({
      type: DataType.DATE,
      allowNull: false,
      defaultValue: new Date(),
    })
    declare registrationOpenDate: Date;

    // Registration close date
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
    })
    declare registrationCloseDate: Date;

    // Tournament start date
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
    })
    declare tournamentStartDate: Date;

    // Tournament end date
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
    })
    declare tournamentEndDate: Date;

    // Timestamp of tournament creation
    @CreatedAt
    declare createdAt: Date;

    // Last updated timestamp
    @UpdatedAt
    declare updatedAt: Date;
}
