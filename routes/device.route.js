import express from "express";
import { validate } from "../middleware/validation.middleware.js";
import { deviceController } from '../controllers/index.controller.js'
import { addDeviceSchema, renameDeviceSchema } from "../validations/device.validation.js";

const router = express.Router();

router.post('/', validate(addDeviceSchema), deviceController.addDevice);
router.put("/:id", validate(renameDeviceSchema), deviceController.renameDevice);
router.delete("/:id", deviceController.deleteDevice);

export default router;