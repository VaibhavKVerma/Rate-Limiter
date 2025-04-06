import userModel from './userModel';
import { UserEntity } from './userEntity';

const createUser = async (user: UserEntity): Promise<UserEntity> => {
    return await userModel.create(user);
};

const findUserByEmail = async (email: string): Promise<UserEntity | null> => {
    return await userModel.findOne({ email, isActive: true });
};

const findUserById = async (id: string): Promise<UserEntity | null> => {
    return await userModel.findOne({ _id: id, isActive: true });
};

const deleteUser = async (id: string): Promise<UserEntity | null> => {
    return await userModel.findOneAndUpdate({ _id: id, isActive: true }, { isActive: false }, { new: true });
};

export { createUser, findUserByEmail, findUserById, deleteUser };
