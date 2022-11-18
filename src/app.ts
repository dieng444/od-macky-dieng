import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import cors from './middlewares/cors';
import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors());

app.use(routes);

export default app;
