import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ["router", "switch", "server", "pc", "other"], required: true },
    position: {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
    },
    parameters: {
      pingInterval: { type: Number, default: 30 },          // seconds
      latencyThreshold: { type: Number, default: 100 },      // ms
      failureProbability: { type: Number, default: 0.1 },    // 0–1
      trafficLoad: { type: Number, default: 0 },             // %
    },
    status: {
      online: { type: Boolean, default: true },
      latency: { type: Number, default: 0 },                 // ms
      lastChecked: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

const Device = mongoose.model("Device", deviceSchema);

export default Device;
