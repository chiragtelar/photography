import path from "path";
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import sliderRoutes from './routes/sliderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import configurationRoutes from './routes/configurationRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 5000;

connectDB(); // connect mongo DB
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser middleware
app.use(cookieParser());

//Decalare url
app.use("/api/slider", sliderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/configuration", configurationRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve(); // set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Decalare production and development conditions
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
