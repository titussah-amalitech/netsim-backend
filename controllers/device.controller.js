import { deviceService } from "../services/index.service.js";
import { asyncHandler } from "../utils/helpers/asyncHandler.helper.js";
import ResponseHelper from "../utils/helpers/response.helper.js";

const deviceController = {
   getAllDevices: asyncHandler(async (req, res, next) => {
      const devices = await deviceService.getAllDevices();

      return ResponseHelper.success(res, devices, "Devices retrieved successfully")
   }),

   getDeviceById: asyncHandler(async (req, res, next) => {
      const { id } = req.params;
      const device = await deviceService.getDeviceById(id);

      return ResponseHelper.success(res, device, "Devices retrieved successfully")
   }),

   addDevice: asyncHandler(async (req, res, next) => {
      const { name, type, position, parameters, status } = req.body;
      const device = await deviceService.addDevice({ name, type, parameters, position, status });

      return ResponseHelper.success(res, device, "Device added successfully", 201)
   }),

   renameDevice: asyncHandler(async (req, res) => {
      const { id } = req.params;
      const { name } = req.body;

      const updated = await deviceService.renameDevice(id, name);

      return ResponseHelper.success(res, updated, "Device renamed successfully");
   }),

   deleteDevice: asyncHandler(async (req, res) => {
      const { id } = req.params;
      const deleted = await deviceService.removeDelete(id);

      ResponseHelper.success(res, deleted, "Device removed successfully")
   }),
}

export default deviceController;