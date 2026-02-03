import Application from "../models/Application.js";

// @desc    Submit a new application
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res) => {
    try {
        // req.file contains the uploaded file info provided by multer
        // req.body contains the text fields

        if (!req.file) {
            return res.status(400).json({ message: "Please upload a resume." });
        }

        const { name, email, mobile, message, internshipTitle, jobTitle } = req.body;

        let applicationType = "Internship";
        if (jobTitle) {
            applicationType = "Career";
        }

        // Create new application
        const application = await Application.create({
            name,
            email,
            mobile,
            message,
            resume: req.file.path, // Save the path to the file
            internshipTitle: internshipTitle || undefined, // Only save if provided
            jobTitle: jobTitle || undefined,               // Only save if provided
            applicationType
        });

        res.status(201).json({
            message: "Application submitted successfully",
            application
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private (Admin only)
export const getApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get only Internship applications
// @route   GET /api/intern-applications
// @access  Private (Admin only)
export const getInternApplications = async (req, res) => {
    try {
        const applications = await Application.find({ applicationType: "Internship" }).sort({ createdAt: -1 });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get only Career applications
// @route   GET /api/career-applications
// @access  Private (Admin only)
export const getCareerApplications = async (req, res) => {
    try {
        const applications = await Application.find({ applicationType: "Career" }).sort({ createdAt: -1 });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
