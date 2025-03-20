import express from "express";
import Employee from "../models/Employee.js";  // Import the Employee model

const router = express.Router();

// Get all employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees" });
  }
});

// Add a new employee
router.post("/employees", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error adding employee" });
  }
});

// Update an employee
router.put("/employees/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error updating employee" });
  }
});

// Delete an employee
router.delete("/employees/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee" });
  }
});

export default router;
