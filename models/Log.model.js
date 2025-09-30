import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
   {
      device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },
      eventType: { type: String, enum: ["timeout", "high_latency", "failure", "recovery"], required: true },
      message: { type: String, default: "" },
      latency: { type: Number, default: 0 },
      timestamp: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

export default Log;