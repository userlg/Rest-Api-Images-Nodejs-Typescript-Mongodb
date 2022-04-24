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
    imagePath: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
});

interface IImage extends Document {
    title: string;
    description: string;
    imagePath: string;
    created_at: string;
}


export default model<IImage>('Image', schema);