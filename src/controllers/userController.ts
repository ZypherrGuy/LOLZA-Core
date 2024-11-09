import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/userServices';

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
      const tournament = await createUser(req.body);
  
      res.status(201).json(tournament);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
};
