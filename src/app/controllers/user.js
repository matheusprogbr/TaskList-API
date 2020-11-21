import User from '../models/User';

const user = {
  index: (req, res) => {
    res.json({ msg: 'Hello World!' });
  },
  create: async (req, res) => {
    const result = await User.create(req.body);
    return res.status(201).json({ result });
  },
};

export default user;
