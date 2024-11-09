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
    if (!req.body.IGN) {
      res.status(400).json({ error: 'IGN is required and cannot be empty' });
    }

    const playerData = new Player({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      IGN: req.body.IGN,
      email: req.body.email,
      teamID: req.body.teamID,
      teamHistory: req.body.teamHistory,
      games: req.body.games,
      nationality: req.body.nationality,
      contactNumber: req.body.contactNumber,
    });

    await playerData.save();
    res.status(201).json(playerData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: (error as Error).message });
  }
};
