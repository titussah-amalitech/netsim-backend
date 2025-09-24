import Device from "../models/Device.model.js";
import BaseRepository from "./base.repository.js";

export default class DeviceRepository extends BaseRepository {
  constructor() {
    super(Device);
  }

  async findByName(ip) {
    return this.model.findOne({ ipAdress: ip });
  }
}

export const deviceRepository = new DeviceRepository();