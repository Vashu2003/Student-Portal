import React from "react";
import { Table } from "react-bootstrap";
import { courses } from "./Data"; // Import the courses data

const Courses = () => (
  <div className="courses-container">
    <Table striped bordered hover className="custom-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course ID</th>
          <th>Credit Units</th>
          <th>Grade</th>
          <th>Grade Points</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.name}</td>
            <td>{course.id}</td>
            <td>{course.credit}</td>
            <td>{course.grade}</td>
            <td>{course.gradePoints}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default Courses;
