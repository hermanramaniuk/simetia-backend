import express from 'express';
import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController';

import { UsersRepo } from './repositories/users/UsersRepo';
import UserInput from './models/UserInput';
import { UserMapper } from './mappers/UserMapper';import { UserUsergroupRelationRepo } from './repositories/userUsergroupRelation/UserUsergroupRelationRepo';
import { authenticateMiddleware, validationMiddleware } from './error/ValidationMiddleware';

const routes = express.Router();

const userController = new UserController(new UsersRepo, new UserMapper());
const loginController = new LoginController(new UsersRepo, new UserMapper());

// Listing all books into library
routes.get('/', (request, response) => {
    return response.send('200: OK!');
});

// Register new user
routes.post('/register', validationMiddleware(UserInput), userController.create);

// Login user
routes.post('/login', loginController.login);

routes.get('/users', userController.getAll);

export default routes;
