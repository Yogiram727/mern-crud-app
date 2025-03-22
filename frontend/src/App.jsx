import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddEmployee = async (employee) => {
    try {
      const response = await fetch('http://localhost:5000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      const data = await response.json();
      setEmployees([...employees, data]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdateEmployee = async (id, updatedEmployee) => {
    try {
      const response = await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });
      const data = await response.json();
      setEmployees(employees.map(emp => (emp._id === id ? data : emp)));
      setSelectedEmployee(null);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: 'DELETE',
      });
      setEmployees(employees.filter(emp => emp._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <EmployeeForm 
        onAddEmployee={handleAddEmployee} 
        onUpdateEmployee={handleUpdateEmployee} 
        selectedEmployee={selectedEmployee} 
      />
      <EmployeeList 
        employees={employees} 
        onEditEmployee={setSelectedEmployee} 
        onDeleteEmployee={handleDeleteEmployee} 
      />
    </div>
  );
};

export default App;