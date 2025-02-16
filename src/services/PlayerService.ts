// PlayerService.ts
import { PlayerRepository, IPlayerRepository } from '../repositories/PlayerRepository';
import { RiotService, RiotAccountResponse } from './RiotService';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 12;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use a strong secret in production!
const JWT_EXPIRES_IN = '1h';


export class PlayerService {
  private riotService: RiotService;

  constructor(private playerRepo: IPlayerRepository = new PlayerRepository()) {
    // Initialize the RiotService.
    this.riotService = new RiotService();
  }
  async getPlayers(): Promise<any[]> {
    return await this.playerRepo.getAll();
  }

  async getPlayer(id: string): Promise<any> {
    return await this.playerRepo.getById(id);
  }

  async registerPlayer(playerData: any): Promise<any> {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(playerData.password, saltRounds);
    const newPlayer = {
      ...playerData,
      password: hashedPassword,
    };
    return await this.playerRepo.create(newPlayer);
  }

  async loginPlayer(email: string, password: string): Promise<{ token: string; player: any }> {
    // Find the player by email
    const player = await this.playerRepo.getByEmail(email);
    if (!player) {
      throw new Error('Invalid credentials');
    }
    // Compare passwords
    const valid = await bcrypt.compare(password, player.password);
    if (!valid) {
      throw new Error('Invalid credentials');
    }
    // Create a JWT token (or generate a session in your sessions table)
    const token = jwt.sign({ playerId: player.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { token, player };
  }

  async fetchRiotAccount(gameName: string, tagLine: string): Promise<RiotAccountResponse> {
    return this.riotService.getAccountByRiotId(gameName, tagLine);
  }
}
