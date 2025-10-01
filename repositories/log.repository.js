import BaseRepository from "./base.repository.js";
import Log from "../models/Log.model.js";
class LogRepository extends BaseRepository {
  constructor() {
    super(Log);
  }
    findLogsByDevice(deviceId) {
        return this.model.find({ device: deviceId });
    }
}
export const logRepository = new LogRepository();