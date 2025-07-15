import { Server, Socket } from "socket.io";

const onlineUsers: Record<string, string> = {};

export const handleConnection = (io: Server, socket: Socket) => {
  console.log("A user connected");

  // Assign a nickname
  socket.on("setNickname", (nickname) => {
    onlineUsers[socket.id] = nickname;
    io.emit("onlineUsers", Object.values(onlineUsers));
    socket.broadcast.emit("message", `${nickname} has joined the chat`);
  });

  // Broadcast typing status
  socket.on("typing", (isTyping) => {
    const nickname = onlineUsers[socket.id] || "Anonymous";
    socket.broadcast.emit("typing", { nickname, isTyping });
  });

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    const nickname = onlineUsers[socket.id] || "Anonymous";
    socket.broadcast.emit("message", `${nickname}: ${msg}`);
  });

  // Broadcast when a user disconnects
  socket.on("disconnect", () => {
    const nickname = onlineUsers[socket.id] || "Anonymous";
    delete onlineUsers[socket.id];
    io.emit("onlineUsers", Object.values(onlineUsers));
    io.emit("message", `${nickname} has left the chat`);
  });
};
