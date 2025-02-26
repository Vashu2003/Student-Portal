import React from "react";
import { Table } from "react-bootstrap";
import { courses, gradeToGPA } from "./Data"; // Import data

const ResultSection = () => {
  // Calculate CGPA
  let totalGradePoints = 0;
  let totalCredits = 0;

  courses.forEach((course) => {
    totalGradePoints += gradeToGPA[course.grade] * course.credit;
    totalCredits += course.credit;
  });

  const cgpa = (totalGradePoints / totalCredits).toFixed(2);

  return (
    <div className="result-container">
      <Table striped bordered hover className="result-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.marks}</td>
              <td>{course.grade}</td>
              <td>{course.credit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="cgpa-box">CGPA: {cgpa}</div>
    </div>
  );
};

export default ResultSection;
