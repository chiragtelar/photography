import express from "express";
const router = express.Router();

import { getSlider } from '../controllers/sliderController.js';
import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router.route("/").get(getSlider);

export default router;