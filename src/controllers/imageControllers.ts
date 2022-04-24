import { Request, Response} from 'express';
import Image from '../models/images';
import multer from '../libs/multer';
import generateDate from '../libs/functions';


export function createImage( req: Request, res: Response){
   
    console.log(req.body);

    var created_at = generateDate();

    multer.single('image');

    return res.json({
        "message":"Image created successfully",
        "status": 200
    });
};

export function getImages(req: Request, res: Response){
     

    return res.json({
        "message":"Getting results successfully",
        "status": 200
    });

};
