import express from 'express';
import {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    upload
} from '../controllers/projectController.js';
import adminProtect from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getProjects)
    .post(adminProtect, createProject);

router.route('/:id')
    .get(getProjectById)
    .put(adminProtect, updateProject)
    .delete(adminProtect, deleteProject);

// Image Upload Route
router.post('/upload', adminProtect, upload.single('image'), (req, res) => {
    if (req.file) {
        // Return path relative to server root, accessible via static serve
        // Normalized path with forward slashes
        const toolPath = `/uploads/${req.file.filename}`;
        res.send({
            filePath: toolPath
        });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }
});

export default router;
