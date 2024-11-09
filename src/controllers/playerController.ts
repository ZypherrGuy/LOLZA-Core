import { Request, Response } from 'express';
import { createPlayer, getAllPlayers } from '../services/playerServices';
import { Player } from '../models/Player';

export const getPlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const players = await getAllPlayers();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const player = await createPlayer(req.body);

    res.status(201).json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: (error as Error).message });
  }
};