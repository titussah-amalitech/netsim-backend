import Device from "../models/Device.model.js";
import BaseRepository from "./base.repository.js";

export default class DeviceRepository extends BaseRepository {
  constructor() {
    super(Device);
  }

  async findByName(name) {
    return this.model.findOne({ name });
  }
}

export const deviceRepository = new DeviceRepository();