import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Donor Dashboard
router.get(
    "/donor",
    protect,
    authorizeRoles("donor"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Donor"
        });

    }
);

// Receiver Dashboard
router.get(
    "/receiver",
    protect,
    authorizeRoles("receiver"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Receiver"
        });

    }
);

// Admin Dashboard
router.get(
    "/admin",
    protect,
    authorizeRoles("admin"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Admin"
        });

    }
);

export default router;