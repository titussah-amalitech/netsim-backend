import express from "express";
import { validate } from "../middleware/validation.middleware.js";
import scenarioController from "../controllers/scenario.controller.js";
import { userIdParamSchema } from '../validations/index.validation.js'

const router = express.Router();

router.get('/', scenarioController.getAllScenarios);
router.get('/:id', validate(userIdParamSchema), scenarioController.getScenarioById);

export default router;

