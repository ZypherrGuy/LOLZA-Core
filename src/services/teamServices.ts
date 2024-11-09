import { Team } from '../models/Team';

export const getAllTeams = async () => {
    return await Team.findAll(); 
};

export const createTeam = async (team: Team) => {
  try {
    const teamDetails = new Team({
        name: team.name,
        logo: team.logo,
        twitterHandle: team.twitterHandle,
        members: team.members,
    });
    
    await teamDetails.save();
    return teamDetails;
  } catch (error) {
      console.error('Error creating team:', error); 
      throw error; 
  }
};