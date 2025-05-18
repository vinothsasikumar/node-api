import { UserDTO } from '../dtos/user.dto';
import { User } from '../mongoose/user.mongooseSchema';

export const getAllUsers = async () => {
    const userData = await User.find();
    return userData;
};

export const getUserById = async (id: string) => {
    const userData = await User.findById(id);
    return userData;
};

export const createNewUser = async (userData: UserDTO) => {
    const createUser = new User(userData);
    return await createUser.save();
};

export const createorUpdateUser = async (id: string, userData: UserDTO) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteAnUser = async (id: string) => {
    return await User.findByIdAndDelete(id);
}