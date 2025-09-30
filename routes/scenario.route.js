import { Router } from "express";
import scenarioController from "../controllers/scenario.controller.js";


const scenarioRouter = Router()

// get a scenario from the database
scenarioRouter.get("/load/:id", scenarioController.loadScenario)

// post a scenario to the database
scenarioRouter.post("/create", scenarioController.createScenario)


export default scenarioRouter;