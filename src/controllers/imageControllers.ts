import { Request, Response } from 'express';
import Image from '../models/images';
import generateDate from '../libs/functions';
import path from 'path';
import fs from 'fs-extra';


export async function createImage(req: Request, res: Response): Promise<Response> {

    const { title, description } = req.body;

    var ipath = req.file?.path;

    var created_at = generateDate();

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

export async function getImage(req: Request, res: Response): Promise<Response> {
    try {
        var result = await Image.findById(req.params.id).orFail();

        if (result != null) {
            console.log('\t\t Element found \n');
            console.log(result);
            return res.json(result);
        }
        else {
            return res.json({ "message": "Element not found", "Status": 404 });
        }

    }
    catch (err) {
        console.error(err);
        return res.json({ "message": "An error occurred", "Status": 500 });
    }
};

export async function deleteImage(req: Request, res: Response): Promise<Response> {


    try {
        var result = await Image.findByIdAndDelete(req.params.id);
        if (result != null) {
            var imageLocation = result['imagePath'];
            await fs.unlink(path.resolve(imageLocation));
            return res.json({ "message": "Element Deleted successfully", result });

        }
        else {
            return res.json({ "message": "Element not found", "status": 404 })
        }
    }
    catch (err) {
        console.error(err);
        return res.json({ "message": "Operation Failed", "Status": 404 });
    }



};

export async function updateImage(req: Request, res: Response): Promise<Response> {

    var id = req.params.id;
    const { title, description } = req.body;
    try {
        var result = await Image.findByIdAndUpdate(id, { title, description });
        if (result != null) {
        console.log('Image Updated');
        result = await Image.findById(id);
        console.log(result);
        return res.json({ "message": "Image Updated Successfully","status":200, result });
    }
    else {
        return res.json({ "message": "Image not found", "status":404});
    }
    }
    catch (err) {
        console.log(err);
        return res.json({ "message": "An error occurred", "status": 500 });
    }
};