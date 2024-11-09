import { Router } from 'express';
import { getTeams, addTeam } from '../controllers/teamController';

const router = Router();

router.get('/teams', getTeams);
router.post('/team', addTeam);

export default router;
