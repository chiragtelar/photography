import express from "express";
const router = express.Router();

import {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getPortfolioById,
} from "../controllers/portfolioController.js";

import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

router.route("/").get(getPortfolio).post(protect, admin, createPortfolio);

router
  .route("/:id")
  .get(checkObjectId, getPortfolioById)
  .put(protect, admin, checkObjectId, updatePortfolio)
  .delete(protect, admin, checkObjectId, deletePortfolio);

export default router;

