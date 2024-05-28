import express from "express";
const router = express.Router();

import {
  getConfiguration,
  getConfigurationById,
  createConfiguration,
  updateConfiguration,
  deleteConfiguration,
} from "../controllers/configurationController.js";

import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router
  .route("/")
  .get(getConfiguration)
  .post(protect, admin, createConfiguration);

router
  .route("/:id")
  .get(checkObjectId, getConfigurationById)
  .put(protect, admin, checkObjectId, updateConfiguration)
  .delete(protect, admin, checkObjectId, deleteConfiguration);

  export default router;
