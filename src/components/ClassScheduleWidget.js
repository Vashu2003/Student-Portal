import React from "react";
import PropTypes from "prop-types";
import { Card, Table } from "react-bootstrap";

const ClassScheduleWidget = ({ classSchedule }) => {
  // Safeguard: Ensure classSchedule is defined and not empty
  const hasClassSchedule = Array.isArray(classSchedule) && classSchedule.length > 0;

  return (
    <Card className="dashboard-card">
      <h5>Class Schedule</h5>
      {hasClassSchedule ? (
        <Table striped bordered>
          <thead>
            <tr>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {classSchedule.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.day}</td>
                <td>{schedule.subject}</td>
                <td>{schedule.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No class schedule available.</p>
      )}
    </Card>
  );
};

ClassScheduleWidget.propTypes = {
  classSchedule: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ),
};

ClassScheduleWidget.defaultProps = {
  classSchedule: [], // Default value for classSchedule
};

export default ClassScheduleWidget;