// src/services/PlayerService.ts
import { PlayerRepository, IPlayerRepository } from '../repositories/PlayerRepository';
import { RiotService, RiotAccountResponse } from './RiotService';

export class PlayerService {
  private riotService: RiotService;

  constructor(private playerRepo: IPlayerRepository = new PlayerRepository()) {
    // Initialize the RiotService.
    this.riotService = new RiotService();
  }

  async getPlayers(): Promise<any[]> {
    // Business logic or additional processing can be added here.
    return await this.playerRepo.getAll();
  }

  async getPlayer(id: string): Promise<any> {
    return await this.playerRepo.getById(id);
  }

  async fetchRiotAccount(gameName: string, tagLine: string): Promise<RiotAccountResponse> {
    return this.riotService.getAccountByRiotId(gameName, tagLine);
  }
}
