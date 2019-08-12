import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { ROOT_ROUTER } from './routes';
import { CONFIG } from './lib/config';
import { routeNotImplemented } from './middlewares/routeNotImplemented';

const app = express();

// App configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ROOT_ROUTER);
app.use(routeNotImplemented);

const { database, server } = CONFIG;

mongoose
  .connect(`${database.url}`)
  .then(() => {
    app.listen(server.port, () => {
      console.log(`Server is running in http://localhost:${server.port}`);
    });
  })
  .catch(error => console.log('Database connection error', error));
