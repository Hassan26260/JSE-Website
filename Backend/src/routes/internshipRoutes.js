import express from "express";
import {
  createInternship,
  getInternships
} from "../controllers/internshipController.js";

const router = express.Router();

router.post("/", createInternship);
router.get("/", getInternships);

export default router;
