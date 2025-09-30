import Joi from "joi";

export const createScenarioSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100).required(),

  difficulty: Joi.string()
    .valid("easy", "medium", "hard")
    .default("easy"),

  timeLimit: Joi.number()
    .integer()
    .min(60)       // at least 1 minute
    .max(3600)     // up to 1 hour
    .default(600),

  devices: Joi.array().items(
    Joi.object({
      device: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)   // validate ObjectId
        .required(),

      position: Joi.object({
        x: Joi.number().default(0),
        y: Joi.number().default(0),
      }).default({}),

      parameters: Joi.object({
        pingInterval: Joi.number().integer().min(1).default(30),
        latencyThreshold: Joi.number().integer().min(1).default(100),
        failureProbability: Joi.number().min(0).max(1).default(0.1),
        trafficLoad: Joi.number().min(0).max(100).default(0),
      }).default({}),
    })
  ).default([]),

  metadata: Joi.object({
    createdBy: Joi.string().default("admin"),
    createdAt: Joi.date().default(() => new Date()),
    description: Joi.string().allow("").max(500).default(""),
  }).default({}),
});

export const updateScenarioSchema = Joi.object({
  body: Joi.object({
    name: Joi.string(),
    difficulty: Joi.string().valid("easy", "medium", "hard"),
    timeLimit: Joi.number(),
    description: Joi.string(),
  }),
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
});
