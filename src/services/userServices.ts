// services/userService.ts
import { User } from '../models/User';
import { UserDetails } from '../controllers/userController';

export const getAllUsers = async () => {
    return await User.findAll(); 
};

export const createUser = async (userData: Partial<User>) => {
  try {
      return await User.create(userData);
  } catch (error) {
      console.error('Error creating user:', error);  // Log error details
      throw error;  // Propagate error to controller
  }
};