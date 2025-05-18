import { Request, Response } from 'express';

import { UserDTO } from '../dtos/user.dto';
import { getAllUsers, getUserById, createNewUser, createorUpdateUser, deleteAnUser } from '../services/user.service';

export const listAllUsers = async (request: Request, response: Response) => {
    response.json(await getAllUsers());
};

export const listUserById = async (request: Request, response: Response) => {
    const { id } = request.params as { id: string };

    const userData = await getUserById(id);

    if (userData === null) {
        response.status(404).json({ message: 'User not found' });
    }

    response.json(userData);
};

export const createUser = async (request: Request, response: Response) => {
    const userData = request.body as UserDTO;

    await createNewUser(userData);

    response.status(201).json({ message: 'User created successfully' });
};

export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params as { id: string };
    const userData = request.body as UserDTO;

    const result = await createorUpdateUser(id, userData);

    if (result === null) {
        response.status(404).json({ message: 'User not found' });
        return;
    }

    response.json({ message: 'User updated successfully' });
};

export const deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params as { id: string };

    const result = await deleteAnUser(id);

    if (result === null) {
        response.status(404).json({ message: 'User not found' });
        return;
    }

    response.json({ message: 'User deleted successfully' });
};