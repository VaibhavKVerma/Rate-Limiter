import mongoose from 'mongoose';
import { UserEntity } from './userEntity';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.index({ email: 1, password: 1, isActive: 1 }, { unique: true });

export default mongoose.model<UserEntity>('User', userSchema);
