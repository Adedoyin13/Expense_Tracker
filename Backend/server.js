require("dotenv").config();
const mongoose = require('mongoose');
const connectDb = require("./config/db");
const express = require('express');
const app = express();
const expenseRoute = require("./route/expenseRoute");
const userRoute = require("./route/userRoute");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require("./middleware/errorMiddleware");

const PORT =  3000;

// Middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// CORS configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
  optionsSuccessStatus: 200,
}));

app.use("/expense", expenseRoute); 
app.use("/user", userRoute); 

// Routes
app.use("/expense", expenseRoute);
app.use("/user", userRoute);



// Connect to MongoDB and start the server
connectDb(); // Ensure this connects the DB without duplicating logic

mongoose.connection.once("open", () => {
  console.log("Database connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// Error handler middleware
app.use(errorHandler);
