import express from 'express';
import routes from './routes';
import init from './database';

const server = express();

init();

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log('Server is running!');
});
