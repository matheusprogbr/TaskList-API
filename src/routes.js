import express from 'express';
import user from './app/controllers/user';
import session from './app/controllers/session';

const routes = express.Router();

routes.get('/', user.index);
routes.post('/users', user.store);

routes.post('/sessions', session.store);

export default routes;
