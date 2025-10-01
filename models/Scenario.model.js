import mongoose from "mongoose";

const scenarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
    timeLimit: { type: Number, default: 600 }, // seconds
    devices: [
      {
        device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },
        type: { type: String, enum: ["router", "switch", "server", "pc", "other"], required: true },
        position: {
          x: { type: Number, default: 0 },
          y: { type: Number, default: 0 },
        },

        parameters: {
          pingInterval: { type: Number, default: 30 },
          latencyThreshold: { type: Number, default: 100 },
          failureProbability: { type: Number, default: 0.1 },
          trafficLoad: { type: Number, default: 0 },
        },

        status: {
          online: { type: Boolean, default: true },
          latency: { type: Number, default: 0 },
          lastChecked: { type: Date, default: Date.now },
        },
      },
    ],
    metadata: {
      createdBy: { type: String, default: "admin" },
      // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      createdAt: { type: Date, default: Date.now },
      description: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const Scenario = mongoose.model("Scenario", scenarioSchema);

export default Scenario;
