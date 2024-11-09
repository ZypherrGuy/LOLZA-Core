import { Request, Response } from 'express';
import { createTeam, getAllTeams } from '../services/teamServices';
import { Team } from '../models/Team';
import { log } from 'console';

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await getAllTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const team = await createTeam(req.body);

    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: (error as Error).message });
  }
};