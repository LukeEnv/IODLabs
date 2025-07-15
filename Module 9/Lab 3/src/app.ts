import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
