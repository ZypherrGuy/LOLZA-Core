import { Router } from 'express';
import { getTournaments, addTournament } from '../controllers/tournamentController';

const router = Router();

router.get('/tournaments', getTournaments);
router.post('/tournament', addTournament);

export default router;
