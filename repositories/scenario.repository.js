import Scenario from "../models/Scenario.model.js";
import BaseRepository from "./base.repository.js";

class ScenarioRepository extends BaseRepository {
    constructor() {
        super(Scenario)
    }
 }

export const scenarioRepository = new ScenarioRepository();