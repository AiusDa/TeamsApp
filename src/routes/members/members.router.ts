import * as express from 'express';
import { createValidator } from 'express-joi-validation';

import { createUserSchema } from './members.schemas';

const validator = createValidator();

export const MEMBERS_ROUTER = express.Router();

MEMBERS_ROUTER.post(
  '/',
  validator.body(createUserSchema),
  (req: express.Request, res: express.Response) => {
    res.send('Create a member and assign it to a team');
  }
);
