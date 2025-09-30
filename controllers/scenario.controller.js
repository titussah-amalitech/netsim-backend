
import { asyncHandler } from "../utils/helpers/asyncHandler.helper.js"
import { scenarioService } from "../services/scenario.service.js"
import ResponseHelper from "../utils/helpers/response.helper.js"

const scenarioController = {

    createScenario: asyncHandler( async(req, res, next) => {
        const scenario = await scenarioService.addScenario(req.body)

        return ResponseHelper.success(res, scenario, 'Scenario created successfully', 201) 
    }),


    loadScenario: asyncHandler(async(req, res, next) => {
        const scenario = await scenarioService.getScenario(req.params.id)
        console.log(scenario, req.params.id)

        return ResponseHelper.success(res, scenario, 'Scenario Found', 200)
    })
}

export default scenarioController
