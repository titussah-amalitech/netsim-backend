import { Router } from "express";
import scenarioController from "../controllers/scenario.controller.js";


const scenarioRouter = Router()

scenarioRouter.get("/load/:id", scenarioController.loadScenario)


scenarioRouter.post("/create", scenarioController.createScenario)


export default scenarioRouter;