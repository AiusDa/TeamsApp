import * as express from 'express';
import { createValidator } from 'express-joi-validation';

import { createTeamSchema } from './teams.schemas';

const validator = createValidator();

export const TEAMS_ROUTER = express.Router();

TEAMS_ROUTER.get('/', (req: express.Request, res: express.Response) => {
  res.send('List of teams');
});

TEAMS_ROUTER.post(
  '/',
  validator.body(createTeamSchema),
  (req: express.Request, res: express.Response) => {
    res.send('List of teams');
  }
);

TEAMS_ROUTER.get('/:id', (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  res.send({
    team_id: id
  });
});

TEAMS_ROUTER.get(
  '/:id/members',
  (req: express.Request, res: express.Response) => {
    res.send('List of members from given team');
  }
);
