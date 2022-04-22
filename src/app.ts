import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';


var app = express();

var port = 7000;

//Settings
app.set('port',process.env.PORT ||  port);

app.use(morgan('dev'));


// Declare router to handler routes 
app.get("/",(req, res) => {
    var message = "<h2>Welcome to this View </h2>"
    console.log(message);
    res.send(message);
});

export default app;