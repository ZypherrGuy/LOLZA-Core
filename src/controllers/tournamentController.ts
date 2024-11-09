import { Request, Response } from 'express';
import { createTournament, getAllTournaments } from '../services/tournamentServices';

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
      const tournament = await createTournament(req.body);
  
      res.status(201).json(tournament);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: (error as Error).message });
    }
};