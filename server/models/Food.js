import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        foodName: {
            type: String,
            required: true,
            trim: true,
        },

        quantity: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        expiryTime: {
            type: Date,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: ["available", "accepted", "pickedup", "delivered"],
            default: "available",
        },

        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const Food = mongoose.model("Food", foodSchema);

export default Food;