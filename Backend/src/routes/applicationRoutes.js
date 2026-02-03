import express from "express";
import {
  submitApplication,
  getApplications,
  getInternApplications,
  getCareerApplications
} from "../controllers/applicationController.js";
import upload from "../middleware/uploadMiddleware.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Route for Internship Applications
router.post("/intern-apply", upload.single("resume"), submitApplication);

// Route for Career Applications
router.post("/career-apply", upload.single("resume"), submitApplication);

// Protected route to view all applications
router.get("/applications", adminProtect, getApplications);

// Protected route to view Internship applications
router.get("/intern-applications", adminProtect, getInternApplications);

// Protected route to view Career applications
router.get("/career-applications", adminProtect, getCareerApplications);

export default router;
