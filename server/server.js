import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
    res.send("Smart Food Donation API is Running...");
});
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/food", foodRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});