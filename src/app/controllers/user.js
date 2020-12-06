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
    const { email, oldPassword } = req.body;
    const { userId } = req;

    const userFind = await User.findByPk(userId);

    if (!userFind)
      return res.status(204).json({ error: 'User does not exists.' });

    if (email !== userFind.email) {
      if (await User.findOne({ where: { email } }))
        return res
          .status(400)
          .json({ error: 'This email has been already registered.' });
    }
    if (oldPassword && !(await userFind.checkPassword(oldPassword)))
      return res.status(401).json({ error: 'Password incorrect' });

    const { id, name } = await userFind.update(req.body);

    return res.json({ data: { id, name, email } });
  },
};

export default user;
