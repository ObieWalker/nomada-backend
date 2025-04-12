import app from "./app";
import http from "http";
import sequelize from "./config/sequelize";
import "./models/associations";
import { initializeWebSocketServer } from "./services/websocketService";

const PORT = process.env.PORT || 9000;

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const io = initializeWebSocketServer(server);
(global as any).io = io; // Make io globally available

sequelize.sync({ alter: true }).then(() => {
  console.log("Database connected and schema updated");
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
