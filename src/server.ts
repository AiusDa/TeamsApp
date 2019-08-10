import * as express from 'express';
import * as bodyParser from 'body-parser';

import { ROOT_ROUTER } from './routes';

const app = express();

// App configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ROOT_ROUTER);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
