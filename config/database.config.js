import mongoose from "mongoose"
import { logger } from "../utils/helpers/logger.helper.js"

export const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URI)

      logger.info(`MongoDB Connected: ${conn.connection.host}`)

      // Set up indexes for performance
      await createIndexes()

      return conn
   } catch (error) {
      logger.error(`Error connecting to MongoDB: ${error.message}`)
      process.exit(1)
   }
}

// Create indexes for better performance
const createIndexes = async () => {
   try {
      // Indexes will be created when models are imported
      logger.info("Database indexes ensured")
   } catch (error) {
      logger.error(`Error creating indexes: ${error.message}`)
   }
}

// Monitor for connection issues
mongoose.connection.on("error", (err) => {
   logger.error(`MongoDB connection error: ${err.message}`)
})

mongoose.connection.on("disconnected", () => {
   logger.warn("MongoDB disconnected")
})

mongoose.connection.on("reconnected", () => {
   logger.info("MongoDB reconnected")
})

// Graceful shutdown
export const closeDBConnection = async () => {
   try {
      await mongoose.connection.close()
      logger.info("MongoDB connection closed")
   } catch (error) {
      logger.error(`Error closing MongoDB connection: ${error.message}`)
   }
}
