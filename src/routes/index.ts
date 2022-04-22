import { Router } from 'express';

var router = Router();


router.get('/images',(req, res) => {
    //res.render('home');
     res.send('Welcome');
});

export default router;