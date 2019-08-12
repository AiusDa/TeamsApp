import * as express from 'express';
import { notFound } from 'boom';

export function routeNotImplemented(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  next(notFound(`Route ${req.url} Not found.`));
}
