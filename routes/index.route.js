import express from "express";
import deviceRoutes from "./device.route.js";

const router = express.Router();

// API routes
router.use("/devices", deviceRoutes);
// router.use("/scenarios", scenarioRoutes);
// router.use("/logs", logRoutes);

export default router;
