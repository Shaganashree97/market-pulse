/* eslint-disable no-unused-vars */
// server/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Dummy registration endpoint
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log('User registered:', { username, email });
  res.json({ success: true });
});

// Dummy login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('User login attempt:', { email });
  res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
