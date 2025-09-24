import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { logger } from "./utils/helpers/logger.helper.js";
import routes from "./routes/index.route.js";
import { connectDB } from "./config/database.config.js";
import corsOptions from "./config/cors.config.js";

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB with error handling
logger.info("📊 Connecting to MongoDB...")
await connectDB()
logger.info("✅ MongoDB connected successfully")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));         // Apply CORS globally  
app.use(express.json());           // Parse JSON bodies
app.use(express.urlencoded({       // Parse URL-encoded bodies
  extended: true
}));

app.get("/", (req, res) => {
  res.send("Hello World! Network Simulation API is running");
});

app.use('/api', routes)

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
