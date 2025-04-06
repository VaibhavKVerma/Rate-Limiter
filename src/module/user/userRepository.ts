import userModel from './userModel';
import { IUser } from './userEntity';

const createUser = async (user: any): Promise<any> => {
    return await userModel.create(user);
};

const findUserByEmail = async (email: string): Promise<IUser | null> => {
    return await userModel.findOne({ email, isActive: true });
};

const findUserById = async (id: string): Promise<IUser | null> => {
    return await userModel.findOne({ _id: id, isActive: true });
};

const updateUser = async (id: string, user: any): Promise<any | null> => {
    return await userModel.findOneAndUpdate({ _id: id, isActive: true }, user, { new: true });
};

const deleteUser = async (id: string): Promise<any | null> => {
    return await userModel.findOneAndUpdate({ _id: id, isActive: true }, { isActive: false }, { new: true });
};

export { createUser, findUserByEmail, findUserById, updateUser, deleteUser };
