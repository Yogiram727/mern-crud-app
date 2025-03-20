import React from 'react';

const EmployeeList = ({ employees, onEditEmployee, onDeleteEmployee }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id} className="border p-2 mb-2 flex justify-between items-center">
            <div>
              <p className="font-bold">{employee.name}</p>
              <p>{employee.email}</p>
              <p>{employee.position}</p>
            </div>
            <div>
              <button 
                onClick={() => onEditEmployee(employee)} 
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteEmployee(employee._id)} 
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;