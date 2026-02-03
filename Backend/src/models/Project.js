import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        category: {
            type: String,
            required: true,
            enum: ['MEP', 'Architectural & Structural', 'Steel Structural Detailing']
        },
        subCategory: { type: String, default: null }, // e.g., "Hospitals", "Hotels" (mainly for MEP)
        country: {
            type: String,
            required: true,
            default: 'OTHERS'
        },
        description: { type: String, default: '' },
        image: { type: String, required: true }, // Main display image URL
        gallery: [{ type: String }] // Array of image URLs
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
