import * as express from 'express';

import { MEMBERS_ROUTER } from './members/members.router';
import { TEAMS_ROUTER } from './teams/teams.router';

export const ROOT_ROUTER = express.Router();

ROOT_ROUTER.use('/teams', TEAMS_ROUTER);
ROOT_ROUTER.use('/members', MEMBERS_ROUTER);
