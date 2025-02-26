import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";

const UpcomingEventsWidget = ({ upcomingEvents }) => {
  // Safeguard: Ensure upcomingEvents is defined and not empty
  const hasUpcomingEvents = Array.isArray(upcomingEvents) && upcomingEvents.length > 0;

  return (
    <Card className="dashboard-card">
      <h5>Upcoming Events</h5>
      {hasUpcomingEvents ? (
        <ListGroup variant="flush">
          {upcomingEvents.map((event, index) => (
            <ListGroup.Item key={index}>{event}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No upcoming events available.</p>
      )}
    </Card>
  );
};

UpcomingEventsWidget.propTypes = {
  upcomingEvents: PropTypes.arrayOf(PropTypes.string),
};

UpcomingEventsWidget.defaultProps = {
  upcomingEvents: [], // Default value for upcomingEvents
};

export default UpcomingEventsWidget;