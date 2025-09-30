import winston from "winston";

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, stack }) =>
      `${timestamp} ${level.toUpperCase()}: ${message}${stack ? `\n${stack}` : ""}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    // Keep a file for errors 
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 3,
    }),
  ],
});

export { logger };