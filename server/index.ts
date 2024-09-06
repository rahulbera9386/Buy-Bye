import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, MERN with TypeScript!');
});

//server
app.listen(PORT, () => {
  console.log(`Server running at:${PORT}`);
});
