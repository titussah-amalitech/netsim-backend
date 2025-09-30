import { asyncHandler } from "../utils/helpers/asyncHandler.helper.js";
import { scenarioService } from "../services/scenario.service.js";
import ResponseHelper from "../utils/helpers/response.helper.js";

const scenarioController = {
    getAllScenarios: asyncHandler(async (req, res, next) => {
        const scenarios = await scenarioService.getAllScenarios();
        return ResponseHelper.success(res, scenarios, "Scenarios retrieved successfully");
    }),

    getScenarioById: asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        const scenario = await scenarioService.getScenarioById(id);
        return ResponseHelper.success(res, scenario, "Scenario retrieved successfully");
    }),
};

export default scenarioController;