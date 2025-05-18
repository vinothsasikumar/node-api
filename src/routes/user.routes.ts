import { Router } from 'express';
import { createUser, deleteUser, listAllUsers, listUserById, updateUser } from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import { UserSchema } from '../dtos/user.dto';

const router = Router();

/**
 * @openapi
 * /api/user/listall:
 *   get:
 *     summary: List all users
 *     description: Retrieve a list of all users from the system.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/listall', listAllUsers);

/**
 * @openapi
 * /api/user/list/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a single user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/list/:id', listUserById);

/**
 * @openapi
 * /api/user/create:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/create', validate(UserSchema), createUser);

/**
 * @openapi
 * /api/user/update/{id}:
 *   put:
 *     summary: Update an existing user
 *     description: Update the information of an existing user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/update/:id', validate(UserSchema), updateUser);

/**
 * @openapi
 * /api/user/delete/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user from the system by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/delete/:id', deleteUser);


export default router;