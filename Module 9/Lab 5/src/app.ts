import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import chatRoutes from "./routes/chatRoutes";
import { handleConnection } from "./controllers/chatController";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Use chat routes
app.use("/chat", chatRoutes);

// Socket.IO logic
io.on("connection", (socket) => {
  handleConnection(io, socket);
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
