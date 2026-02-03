import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            required: true, // e.g., "Full Time", "Part Time"
            default: "Full Time"
        },
        location: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true,
            maxLength: 200 // Short description for the card
        },
        details: {
            roleOverview: { type: String, required: true },
            responsibilities: [{ type: String, required: true }],
            qualifications: [{ type: String, required: true }],
            experience: { type: String, required: true },
            freshers: { type: Boolean, default: false }
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Job", jobSchema);
