import { Player } from '../models/Player';

export const getAllPlayers = async () => {
    return await Player.findAll(); 
};

export const createPlayer = async (playerData: Partial<Player>) => {
  try {
      return await Player.create(playerData);
  } catch (error) {
      console.error('Error creating player:', error); 
      throw error; 
  }
};