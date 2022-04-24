import { Router } from 'express';

import {createImage, allImages} from '../controllers/imageControllers';

import multer from '../libs/multer';

var router = Router();


router.post('/add_image',multer.single('image'),(req, res) => {

     
     createImage(req,res);
});


router.get('/all_images',(req, res) => {
     allImages(req, res);
});

export default router;