import Internship from "../models/Internship.js";

export const createInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find({ isActive: true });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
