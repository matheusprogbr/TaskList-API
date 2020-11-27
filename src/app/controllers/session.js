import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

const session = {
  store: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ msg: 'Email or password incorrect!' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Email or password incorrect!' });

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};

export default session;
