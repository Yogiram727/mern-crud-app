import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onAddEmployee, onUpdateEmployee, selectedEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({
        name: '',
        email: '',
        position: '',
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEmployee) {
      onUpdateEmployee(selectedEmployee._id, employee);
    } else {
      onAddEmployee(employee);
    }
    setEmployee({
      name: '',
      email: '',
      position: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-semibold mb-2">{selectedEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Position</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {selectedEmployee ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
};

export default EmployeeForm;