import express from "express";
import { check, validationResult } from "express-validator";
import {
  createInternship,
  getInternships
} from "../controllers/internshipController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Validation Middleware
const validateInternship = [
  check("title", "Title is required").not().isEmpty(),
  check("department", "Department is required").not().isEmpty(),
  check("description", "Description is required").not().isEmpty(),
  check("duration", "Duration is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

router.post("/", adminProtect, validateInternship, createInternship);
router.get("/", getInternships);

export default router;
