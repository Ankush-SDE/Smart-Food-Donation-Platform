import express from "express";
import { addFood } from "../controllers/foodController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Food (Only Donor)
router.post(
    "/add",
    protect,
    authorizeRoles("donor"),
    addFood
);

export default router;