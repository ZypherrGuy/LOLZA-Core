import { Game } from '../models/Game';

export const getAllGames = async () => {
    return await Game.findAll(); 
};

export const createGame = async (game: Game) => {
    try {
      const gameDetails = new Game({
        logo: game.logo,
        name: game.name,
        publisher: game.publisher,
        description: game.description
      });
      
      await gameDetails.save();
      return gameDetails;
    } catch (error) {
        console.error('Error creating team:', error); 
        throw error; 
    }
};