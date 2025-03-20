import mongoose from "mongoose";

// Define Employee schema
const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String
});

// Create Employee model
const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
