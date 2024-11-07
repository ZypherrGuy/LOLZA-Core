import { Request, Response } from 'express';
import { createTournament, getAllTournaments } from '../services/tournamentServices';
import { CheckIfNull } from '../utils/nullHandler';

export const getTournaments = async (req: Request, res: Response): Promise<void> => {
  try {
    const tournaments = await getAllTournaments();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addTournament = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body; 
    CheckIfNull(title, res);
    const tournament = await createTournament({ title, description });
    res.status(201).json(tournament);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
