import Food from "../models/Food.js";

// Add Food
export const addFood = async (req, res) => {
    try {
        const {
            foodName,
            quantity,
            category,
            expiryTime,
            location,
        } = req.body;

        // Validation
        if (
            !foodName ||
            !quantity ||
            !category ||
            !expiryTime ||
            !location
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Create Food
        const food = await Food.create({
            foodName,
            quantity,
            category,
            expiryTime,
            location,
            image: req.body.image || "",
            donor: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Food Added Successfully",
            food,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};