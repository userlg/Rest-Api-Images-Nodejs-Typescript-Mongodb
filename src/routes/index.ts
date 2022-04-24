import { Router } from 'express';

import {createImage, allImages, getImage, deleteImage, updateImage} from '../controllers/imageControllers';

import multer from '../libs/multer';

var router = Router();


router.post('/add_image',multer.single('image'),(req, res) => {
     
     createImage(req,res);
});


router.get('/all_images',(req, res) => {
     allImages(req, res);
});

router.get('/get_image/:id',(req, res) => {
     getImage(req, res);
});

router.delete('/delete_image/:id',(req, res) => {
     deleteImage(req, res);
});

router.put('/update_image/:id',(req, res) => {
     updateImage(req, res);
})

export default router;