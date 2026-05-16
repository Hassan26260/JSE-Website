import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

connectDB();
const app = express();

// --- Security Hardening ---
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow serving images to frontend during dev
}));

// Cross-Origin Resource Sharing tightening
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://jseeng.com', 'https://www.jseeng.com'] 
        : '*',
    credentials: true,
};
app.use(cors(corsOptions));

// Global Rate Limiting: Max 1000 requests per 15 minutes per IP
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api', globalLimiter);

// Strict Rate Limiting for Admin Login: Max 10 attempts per 15 mins
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many login attempts from this IP, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/admin/login', loginLimiter);

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
