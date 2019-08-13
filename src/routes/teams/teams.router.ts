import * as express from 'express';
import { createValidator } from 'express-joi-validation';

import { createTeamSchema, updateTeamSchema } from './teams.schemas';
import { TeamController } from '../../controllers/team/team.controller';
import { MemberController } from '../../controllers/member/member.controller';

const validator = createValidator();

export const TEAMS_ROUTER = express.Router();

TEAMS_ROUTER.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const teamCtrl = new TeamController();
    const teams = await teamCtrl.getAll();
    res.send(teams);
  } catch (error) {
    res.send(error);
  }
});

TEAMS_ROUTER.post(
  '/',
  validator.body(createTeamSchema),
  async (req: express.Request, res: express.Response) => {
    try {
      const teamCtrl = new TeamController();
      const team = await teamCtrl.create({
        name: req.body.name
      });
      res.send(team);
    } catch (error) {
      res.send(error);
    }
  }
);

TEAMS_ROUTER.get(
  '/:id',
  async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
      const teamCtrl = new TeamController();
      const team = await teamCtrl.getById(id);
      res.send(team);
    } catch (error) {
      res.send(error);
    }
  }
);

TEAMS_ROUTER.get(
  '/:id/members',
  async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
      const memberCtrl = new MemberController();
      const members = await memberCtrl.findByTeamId(id);
      res.send(members);
    } catch (error) {
      res.send(error);
    }
  }
);

TEAMS_ROUTER.put(
  '/:id',
  validator.body(updateTeamSchema),
  async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const { name } = req.body;

    console.log({ id });

    try {
      const teamCtrl = new TeamController();
      const result = await teamCtrl.updateById(id, name);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
);

TEAMS_ROUTER.delete(
  '/:id',
  async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
      const teamCtrl = new TeamController();
      const result = await teamCtrl.deleteById(id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
);
