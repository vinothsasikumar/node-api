import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().min(5, { message: 'Minimum name length should be 5 characters' }).max(25),
    email: z.string().email().max(30)
});

export type UserDTO = z.infer<typeof UserSchema>;

