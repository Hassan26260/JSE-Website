import express from "express";
import {
    getJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} from "../controllers/jobController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.route("/")
    .get(getJobs)
    .post(adminProtect, createJob);

router.route("/:id")
    .get(getJobById)
    .put(adminProtect, updateJob)
    .delete(adminProtect, deleteJob);

export default router;
