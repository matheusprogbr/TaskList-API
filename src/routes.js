import express from 'express';
import user from './app/controllers/user';

const routes = express.Router();

routes.get('/', user.index);
routes.post('/user', user.create);

export default routes;
