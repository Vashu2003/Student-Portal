import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const AttendanceWidget = ({ attendance, attendanceBreakdown }) => {
  return (
    <Card className="dashboard-card">
      <h5>Attendance</h5>
      <p>
        Overall Attendance: <strong>{attendance}%</strong>
      </p>
      <ProgressBar
      now={attendance}
      className="mb-3 animated-gradient-progress"
      style={{ "--progress-width": `${attendance}%` }} // Pass value dynamically
    />    
    </Card>
  );
};

AttendanceWidget.propTypes = {
  attendance: PropTypes.number.isRequired,
  attendanceBreakdown: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      attendance: PropTypes.number.isRequired,
    })
  ),
};

AttendanceWidget.defaultProps = {
  attendanceBreakdown: [],
};

export default AttendanceWidget;