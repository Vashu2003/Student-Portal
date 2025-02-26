import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { assignments } from "./Data"; // Import assignments data

const Assignments = () => {
  const [filter, setFilter] = useState("All");

  const filteredAssignments = filter === "All" 
    ? assignments 
    : assignments.filter((assignment) => assignment.status === filter);

  return (
    <div className="assignments-container">
      {/* Filter Dropdown */}
      <Form.Group controlId="assignmentFilter" className="mb-3">
        <Form.Label>Filter by Status:</Form.Label>
        <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </Form.Select>
      </Form.Group>

      <Table striped bordered hover className="assignments-table">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Course</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.name}</td>
              <td>{assignment.course}</td>
              <td>{assignment.due}</td>
              <td className={assignment.status === "Completed" ? "status-completed" : "status-incomplete"}>
                {assignment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Assignments;
