import { Tournament } from '../models/Tournament';

export const getAllTournaments = async () => {
    return await Tournament.findAll(); 
};

export const createTournament = async (tournament: Tournament) => {
  try {
    const tournamentDetails = new Tournament({
      title: tournament.title,
      description: tournament.description,
      status: tournament.status,
      participants: tournament.participants, 
      prizePool: tournament.prizePool,
      registrationOpenDate: tournament.registrationOpenDate,
      registrationCloseDate: tournament.registrationCloseDate,
      tournamentStartDate: tournament.tournamentStartDate,
      tournamentEndDate: tournament.tournamentEndDate
    });
    
    await tournamentDetails.save();
    return tournamentDetails;
  } catch (error) {
      console.error('Error creating tournament:', error); 
      throw error; 
  }
};