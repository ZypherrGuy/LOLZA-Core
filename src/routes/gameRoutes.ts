import { Router } from 'express';
import { getGames, addGame } from '../controllers/gameController';

const router = Router();

router.get('/games', getGames);
router.post('/game', addGame);

export default router;
