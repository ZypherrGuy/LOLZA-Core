import { Request, Response } from 'express';
import { createGame, getAllGames } from '../services/gameServices';

export const getGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const games = await getAllGames();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const game = await createGame(req.body);

    res.status(201).json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: (error as Error).message });
  }
};
