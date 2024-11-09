import { Router } from 'express';
import { getPlayers, addPlayer } from '../controllers/playerController';

const router = Router();

router.get('/players', getPlayers);
router.post('/player', addPlayer);

export default router;
