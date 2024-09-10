import { NextApiRequest, NextApiResponse } from 'next';

const users = [
  { email: 'test@example.com', password: '123456' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
