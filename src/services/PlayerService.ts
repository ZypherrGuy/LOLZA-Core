import { PlayerRepository, IPlayerRepository } from '../repositories/PlayerRepository';

export class PlayerService {
  constructor(private playerRepo: IPlayerRepository = new PlayerRepository()) {}

  async getPlayers(): Promise<any[]> {
    // (Potentially add business logic here)
    return await this.playerRepo.getAll();
  }

  async getPlayer(id: string): Promise<any> {
    // (Potentially add business logic here)
    return await this.playerRepo.getById(id);
  }
}
