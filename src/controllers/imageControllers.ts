import { Request, Response } from 'express';
import Image from '../models/images';
import generateDate from '../libs/functions';


export async function createImage(req: Request, res: Response) {

    const { title, description } = req.body;

    var ipath = req.file?.path;

    var created_at = generateDate();

    //var dir = req.file.path;

    const newImage = {
        title: title,
        description: description,
        created_at: created_at,
        imagePath: ipath,

    }

    const image = new Image(newImage);

    await image.save();

    console.log(image);

    return res.json({
        "message": "Image created successfully",
        "status": 200,
        image
    });
};

export async function allImages(req: Request, res: Response): Promise<Response> {

    const images = await Image.find();

    if (images.length > 0) {
        console.log(images);
        return res.json({
            "message": "Getting results successfully",
            "status": 200,
            images
        });
    }
    else {
        return res.json({ "message": "No images found", "status": 404 })
    }

};
