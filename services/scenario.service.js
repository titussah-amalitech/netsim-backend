import { scenarioRepository } from "../repositories/scenario.repository.js";
import { AppError } from "../utils/helpers/appError.helper.js";

class ScenarioService {
    async addScenario(data){

        return await scenarioRepository.create(data)
    }
    async getScenario(id){
        const scenario = await scenarioRepository.findById(id)

        if(!scenario) throw new AppError('Scenario Not Found', 404)

            return scenario
    }
}

export const scenarioService = new ScenarioService();