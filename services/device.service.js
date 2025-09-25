import { deviceRepository } from "../repositories/device.repository.js";
import { AppError } from "../utils/helpers/appError.helper.js";

class DeviceService {
   async addDevice({ name, type, parameters, position, status }) {
      // check for duplicate names
      const existing = await deviceRepository.findByName(name);
      if (existing) throw new AppError("Device with this name already exists", 400)

      return await deviceRepository.create({ name, type, parameters, position, status });
   }

   async getAllDevices() {
      return await deviceRepository.find();
   }

   async getDeviceById(id) {
      const device = await deviceRepository.findById(id);
      if (!device) throw new AppError("Device not found", 404)

      return await device;
   }

   async renameDevice(id, newName) {
      const device = await deviceRepository.findById(id);
      if (!device) throw new AppError("Device not found", 404);

      device.name = newName;
      return await device.save();
   }

   async removeDelete(id) {
      const deleted = await deviceRepository.delete(id);
      if (!deleted) throw new AppError("Device not found", 404);

      return deleted;
   }
}

export const deviceService = new DeviceService();