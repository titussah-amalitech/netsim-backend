import express from "express";
import { logController } from '../controllers/index.controller.js'
const router = express.Router();

router.get('/',logController.getLogs);
router.get('/:id',logController.getLogsByDevice);
router.post('/generate',logController.generateLogs);
export default router;