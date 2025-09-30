import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
   {
      device: { type: mongoose.Schema.Types.ObjectId, ref: "Device", required: true },  
   // keep enum values aligned with Device.model.js (lowercase) to avoid validation errors
      deviceType: { type: String, enum: ["router", "switch", "server", "pc", "other"], required: false },
      eventType: { type: String, enum: ["timeout", "high_latency", "failure", "recovery"], required: true },
      message: { type: String, default: "" },
      status: { type: String, enum: ["online", "offline","warning"], default: "warning" },
      timestamp: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

export default Log;