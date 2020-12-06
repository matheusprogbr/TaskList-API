import express from 'express';
import user from './app/controllers/user';
import session from './app/controllers/session';
import authMiddleware from './app/middlewares/auth';

const routes = express.Router();

routes.get('/', user.index);
routes.post('/users', user.store);
routes.post('/sessions', session.store);

routes.use(authMiddleware);

routes.put('/users', user.update);

export default routes;
