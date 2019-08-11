import * as express from 'express';
import { createValidator } from 'express-joi-validation';

import { createUserSchema } from './members.schemas';
import { MemberController } from '../../controllers/member/member.controller';

const validator = createValidator();

export const MEMBERS_ROUTER = express.Router();

MEMBERS_ROUTER.post(
  '/',
  validator.body(createUserSchema),
  async (req: express.Request, res: express.Response) => {
    try {
      const membersCtrl = new MemberController();
      const member = await membersCtrl.create({
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        teamId: req.body.teamId
      });
      res.send(member);
    } catch (error) {
      res.send(error);
    }
  }
);
