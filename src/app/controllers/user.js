import User from '../models/User';

const user = {
  index: (req, res) => {
    res.json({ msg: 'Hello World!' });
  },
  store: async (req, res) => {
    const userEmail = req.body.email;

    if (await User.findOne({ where: { email: userEmail } }))
      return res
        .status(400)
        .json({ error: 'The email has been already registered!' });
    const { id, name, email } = await User.create(req.body);

    const result = {
      id,
      name,
      email,
    };

    return res.status(201).json({ result });
  },
  update: async (req, res) => {
    return res.json({ msg: req.userId });
  },
};

export default user;
