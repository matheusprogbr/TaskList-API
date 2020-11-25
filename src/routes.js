import express from 'express';
import user from './app/controllers/user';

const routes = express.Router();

routes.get('/', user.index);
routes.post('/users', user.store);

export default routes;
