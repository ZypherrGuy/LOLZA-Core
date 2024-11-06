import { User } from '../models/User';

export const getAllUsers = async () => {
    return await User.findAll(); 
};

export const createUser = async (userData: Partial<User>) => {
  try {
      return await User.create(userData);
  } catch (error) {
      console.error('Error creating user:', error); 
      throw error; 
  }
};