import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";


const RecentNotificationsWidget = ({ notifications }) => {
  return (
    <Card className="dashboard-card">
      <h5>Recent Notifications</h5>
      {notifications.length > 0 ? (
        <ListGroup variant="flush">
          {notifications.map((notification, index) => (
            <ListGroup.Item key={index}>{notification}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No recent notifications.</p>
      )}
    </Card>
  );
};

RecentNotificationsWidget.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string),
};

RecentNotificationsWidget.defaultProps = {
  notifications: [],
};

export default RecentNotificationsWidget;