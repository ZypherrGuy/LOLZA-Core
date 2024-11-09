import { Player } from '../models/Player';

export const getAllPlayers = async () => {
    return await Player.findAll(); 
};

export const createPlayer = async (player: Player) => {
    try {
      const playerDetails = new Player({
        firstName: player.firstName,
        lastName: player.lastName,
        IGN: player.IGN,
        email: player.email,
        teamID: player.teamID,
        teamHistory: player.teamHistory,
        games: player.games,
        nationality: player.nationality,
        contactNumber: player.contactNumber,
      });
      
      await playerDetails.save();
      return playerDetails;
    } catch (error) {
        console.error('Error creating team:', error); 
        throw error; 
    }
  };