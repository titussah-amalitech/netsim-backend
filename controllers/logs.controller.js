import { logsService } from "../services/logs.service.js";
import ResponseHelper from "../utils/helpers/response.helper.js";
const logsController = {
    getLogs: async (req, res) => {
        const logs = await logsService.getLogs();
        return ResponseHelper.success(res, logs, "Logs retrieved successfully")
    },
        
    generateLogs: async (req, res) => {
        const logs = await logsService.generateLogs();
        if (!logs) return ResponseHelper.error(res, "Error generating logs", 500);
        return ResponseHelper.success(res, logs, "Logs generated successfully", 200)
    },
    getLogsByDevice: async (req, res) => {
        const { id } = req.params;
        const logs = await logsService.getLogsByDevice(id);
        return ResponseHelper.success(res, logs, "Logs retrieved successfully")
    },
};
export default logsController;