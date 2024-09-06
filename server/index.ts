import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOption={
  origin:"http://localhost:5173",
  credentials:true,
  methods:["GET","POST","PUT","PATCH","DELETE"],
  allowedHeaders:["Content-type","Authorization","cache-control","expires","pragma","Last-Modified","Set-Cookie","cookie","Accept"]
}


// Middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, MERN with TypeScript!');
});

//server
app.listen(PORT, () => {
  console.log(`Server running at:${PORT}`);
});
