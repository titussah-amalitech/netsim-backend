import { scenarioRepository } from "../repositories/scenario.repository.js";
import { AppError } from "../utils/helpers/appError.helper.js";

class ScenarioService {

   constructor() {
   }

   async getAllScenarios() {
      return await scenarioRepository.find();
   }

   async getScenarioById(id) {
      const scenario = await scenarioRepository.findById(id);
      if (!scenario) throw new AppError("Scenario not found", 404);
      return scenario;
   }

   async updateScenario(id, { name, difficulty, timeLimit, description }) {
      const scenario = await scenarioRepository.findById(id);
      if (!scenario) throw new AppError("Scenario not found", 404);

      if (name) scenario.name = name;
      if (difficulty) scenario.difficulty = difficulty;
      if (timeLimit) scenario.timeLimit = timeLimit;
      if (description) scenario.metadata.description = description;

      return scenario.save();
   }

    // async changeDeviceStatus(scenario, deviceId, newStatus) {
    //     const device = scenario.devices.find(d => d.device.toString() === deviceId);
    //     if (!device) throw new Error("Device not found in scenario");
    //
    //     device.status = newStatus;
    //     return scenario.save();
    // }
    //
    // async startScenario(scenario) {
    //     scenario.status = "running";
    //     const timer = setInterval(() => {})
    // }
}

export const scenarioService = new ScenarioService();