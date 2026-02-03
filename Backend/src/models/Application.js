import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        mobile: {
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            trim: true
        },
        resume: {
            type: String, // Path to the uploaded file
            required: true
        },
        // Optional: Link to specific internship if applicable
        internshipTitle: {
            type: String,
            required: false
        },
        // Optional: Link to specific job if applicable
        jobTitle: {
            type: String,
            required: false
        },
        applicationType: {
            type: String,
            enum: ["Internship", "Career"],
            default: "Internship"
        },
        status: {
            type: String,
            enum: ["Pending", "Reviewed", "Shortlisted", "Rejected"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Application", applicationSchema);
