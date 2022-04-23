import { Schema, model, Document } from 'mongoose';


const schema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    ImagePath: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
       type: Date,
       required: true,
    }
});

interface IImage extends Document {
    title: string;
    description: string;
    ImagePath: string;
    created_at: Date;
}


export default model<IImage>('Image', schema);