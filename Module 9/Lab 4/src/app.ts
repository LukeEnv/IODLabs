import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
