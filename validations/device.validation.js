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
 description: Joi.string().allow("").max(500).default("")
});

// Validation schema for renaming a device
export const renameDeviceSchema = Joi.object({
   name: Joi.string().trim().required().messages({
      "any.required": "New device name is required",
      "string.empty": "New device name cannot be empty",
   }),
});
