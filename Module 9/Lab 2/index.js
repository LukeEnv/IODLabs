import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
