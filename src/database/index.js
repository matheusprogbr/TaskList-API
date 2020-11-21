import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const init = () => {
  const models = [User];

  const sequelize = new Sequelize(databaseConfig);
  models.map((model) => model.init(sequelize));
};

export default init;
