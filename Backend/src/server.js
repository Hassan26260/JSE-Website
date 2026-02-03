import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/internships", internshipRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api", applicationRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/projects", projectRoutes);

// Serve Static Files (Make 'public' folder accessible)
// Go up one level from 'src' to get to root
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


// Make uploads folder static
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../Frontend/dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error detected:", err.message);

  // If status code is 200 (default), set it to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
