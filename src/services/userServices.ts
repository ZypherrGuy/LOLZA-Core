import { User } from '../models/User';

export const getAllUsers = async () => {
    return await User.findAll(); 
};

export const createUser = async (user: User) => {
    try {
      const userDetails = new User({
        
      });
      
      await userDetails.save();
      return userDetails;
    } catch (error) {
        console.error('Error creating tournament:', error); 
        throw error; 
    }
  };