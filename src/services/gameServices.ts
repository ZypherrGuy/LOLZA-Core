import { Game } from '../models/Game';

export const getAllGames = async () => {
    return await Game.findAll(); 
};

export const createGame = async (gameData: Partial<Game>) => {
  try {
      return await Game.create(gameData);
  } catch (error) {
      console.error('Error creating game:', error); 
      throw error; 
  }
};