import { Router } from 'express';

var router = Router();


router.get('/',(req, res) => {
    //res.render('home');
    return res.send('Welcome');
});

export default router;