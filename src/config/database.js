module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
