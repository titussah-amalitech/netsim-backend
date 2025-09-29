// import AppError from "../utils/appError.js";
import Device from "../models/Device.model.js";
import Log from "../models/Log.model.js";
import { logRepository } from "../repositories/log.repository.js";
class LogsServices {
  async getLogs() {
    return await logRepository.find();
  }

  async getLogsByDevice(id) {
    const logs = await logRepository.findLogsByDevice(id);
    // if (!logs) throw new AppError("Unable to get logs", 404);

    return await device;
  }

  //automatically generate logs for a random number of devices
  async generateLogs() {
    try {
      // console.log("Generating logs...");
      // 1. Fetch all devices
      const devices = await Device.find();
      if (devices.length === 0) return;
      const numberToUpdate = Math.floor(Math.random() * devices.length) + 1;
      const shuffled = devices.sort(() => 0.5 - Math.random());
      const selectedDevices = shuffled.slice(0, numberToUpdate);
     const logs = [];
      for (const device of selectedDevices) {
        device.parameters.pingInterval = Math.floor(Math.random() * 60) + 10; // 10–70s
        device.parameters.latencyThreshold =
          Math.floor(Math.random() * 300) + 50; // 50–350ms
        device.parameters.failureProbability = parseFloat(
          Math.random().toFixed(2)
        ); // 0–1
        device.parameters.trafficLoad = Math.floor(Math.random() * 100); // 0–99%
        const statuses = ["online", "offline", "warning"];
        const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
        device.status = newStatus;
        let eventType = "recovery";
        let message = "Device recovered and running normally.";

        if (newStatus === "offline") {
          eventType = "failure";
          message = "Device went offline.";
        } else if (newStatus === "warning") {
          // Random choice: timeout or high latency
          eventType = Math.random() > 0.5 ? "timeout" : "high_latency";
          message =
            eventType === "timeout"
              ? "Device timed out while responding to ping."
              : "Device experiencing high latency.";
        }

        // 4. Save updated device
        await device.save();

        // 5. Create log entry
        const log = new Log({
          device: device._id,
          eventType,
          message,
          status: newStatus,
        });
        await log.save();
        logs.push(log);
      }
      //retuen newly generated logs
      return logs;

    } catch (err) {
      console.error("Error generating logs:", err);
      // AppError("Error generating logs: " + err.message, 500);
      return null;
    }
  }

  async deleteLogs() {
    try {
      // console.log("Deleting old logs...");
      const result = await Log.deleteMany({});
      return result;
    } catch (err) {
      console.error("Error deleting logs:", err);
      // AppError("Error deleting logs: " + err.message, 500);
      return null;
    }
  }

}


export const logsService = new LogsServices();