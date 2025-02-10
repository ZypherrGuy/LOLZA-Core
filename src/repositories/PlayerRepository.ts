import pool from '../config/postgres';

export interface IPlayerRepository {
  getAll(): Promise<any[]>;
  getById(id: string): Promise<any>;
}

export class PlayerRepository implements IPlayerRepository {
  async getAll(): Promise<any[]> {
    const result = await pool.query('SELECT * FROM "Players"');
    return result.rows;
  }

  async getById(id: string): Promise<any> {
    const result = await pool.query('SELECT * FROM "Players" WHERE id = $1', [id]);
    return result.rows[0];
  }
}
