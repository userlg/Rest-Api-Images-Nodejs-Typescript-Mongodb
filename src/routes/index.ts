import { Router } from 'express';

import {createImage, getImages} from '../controllers/imageControllers'

var router = Router();


router.post('/add_image',(req, res) => {
     createImage(req,res);
});


router.get('/get_images',(req, res) => {
     getImages(req, res);
});

export default router;