import express from 'express';
import morgan from 'morgan';

var app = express();


//Settings
app.set('port',process.env.PORT ||  8000)

app.use(morgan('dev'));


export default app;