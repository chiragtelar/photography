import express from "express";
const router = express.Router();

import { getSlider, createSlider } from '../controllers/sliderController.js';
import { protect, admin } from "../middleware/authMiddleware.js"; 

router.route("/").get(getSlider).post(protect, admin, createSlider);

export default router;