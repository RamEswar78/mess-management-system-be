const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student') ;
const complaintRouter = require('./routes/complaint');
const { connectToDB } = require('./models/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectToDB();

// Routes
app.get('/',(req , res)=>{
  res.send("Welcome to My World");
})
app.use('/auth', authRouter);
app.use('/student', studentRouter);
app.use('/complaints', complaintRouter);
app.use('/admin', adminRouter);

// Global error handler
// app.use(errorHandler);

// Server setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
