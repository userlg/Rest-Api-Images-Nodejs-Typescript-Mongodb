import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    done: {
        type: Boolean,
        default: false,
    }
},
    {
        versionKey: false,
    });

export default model('Task', taskSchema);