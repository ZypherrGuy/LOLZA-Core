import { Tournament } from '../models/Tournament';

export const getAllTournaments = async () => {
    return await Tournament.findAll(); 
};

export const createTournament = async (tournamentData: Partial<Tournament>) => {
  try {
      return await Tournament.create(tournamentData);
  } catch (error) {
      console.error('Error creating tournament:', error); 
      throw error; 
  }
};