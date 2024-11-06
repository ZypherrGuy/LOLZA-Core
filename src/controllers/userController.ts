import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/userServices';

export interface UserDetails {
    username: string;
    email: string;
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
      const users = await getAllUsers();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ error: (error as Error).message });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
      const { username, email } = req.body;

      if (!username || !email) {
          res.status(400).json({ error: 'Username and email are required.' });
          return;
      }

      const user = await createUser({ username, email });
      res.status(201).json(user);
  } catch (error) {
      console.error('Error in addUser:', error);  // Log error details
      res.status(500).json({ error: 'Internal server error' });
  }
};
