import Joi from "joi";

// Validation schema for adding a new device
export const addDeviceSchema = Joi.object({
   name: Joi.string().trim().required().messages({
      "any.required": "Device name is required",
      "string.empty": "Device name cannot be empty",
   }),
   type: Joi.string()
      .valid("router", "switch", "server", "pc", "other")
      .required()
      .messages({
         "any.only": "Device type must be one of router, switch, server, pc, other",
         "any.required": "Device type is required",
      }),
   position: Joi.object({
      x: Joi.number().default(0),
      y: Joi.number().default(0),
   }).default({ x: 0, y: 0 }),
   parameters: Joi.object({
      pingInterval: Joi.number().default(30),
      latencyThreshold: Joi.number().default(100),
      failureProbability: Joi.number().min(0).max(1).default(0.1),
      trafficLoad: Joi.number().min(0).max(100).default(0),
   }).default({
      pingInterval: 30,
      latencyThreshold: 100,
      failureProbability: 0.1,
      trafficLoad: 0,
   }),
   status: Joi.object({
      online: Joi.boolean().default(true),
      latency: Joi.number().default(0),
      lastChecked: Joi.date().default(Date.now),
   }).default({ online: true, latency: 0, lastChecked: Date.now() }),
});

// Validation schema for renaming a device
export const renameDeviceSchema = Joi.object({
   name: Joi.string().trim().required().messages({
      "any.required": "New device name is required",
      "string.empty": "New device name cannot be empty",
   }),
});
