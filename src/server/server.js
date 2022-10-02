import express from 'express';
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));

export default { app };
