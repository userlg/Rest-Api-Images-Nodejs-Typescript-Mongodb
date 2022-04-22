import express from 'express';
import morgan from 'morgan';
import router from './routes'
import cors from 'cors';
import path from 'path';

import { engine } from 'express-handlebars';


let app = express();

let port = 8000;


//Settings
app.set('port',process.env.PORT ||  port);


//Settings to Handlebars
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', engine({
    defaultLayout:"main",
    extname:".hbs",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}));

//-------------End Handlebars settings

//Load the Css file

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api",router);
// Declare router to handler routes 

app.get('/', (req, res) => {
    return res.render('home',
    {
        title: 'Home Page',
    });
});
export default app;