import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";

const QuickLinksWidget = ({ quickLinks }) => {
  // Safeguard: Ensure quickLinks is defined and not empty
  const hasQuickLinks = Array.isArray(quickLinks) && quickLinks.length > 0;

  return (
    <Card className="dashboard-card">
      <h5>Quick Links</h5>
      {hasQuickLinks ? (
        <ListGroup variant="flush">
          {quickLinks.map((link, index) => (
            <ListGroup.Item key={index}>
              <a href={link.url}>{link.label}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No quick links available.</p>
      )}
    </Card>
  );
};

QuickLinksWidget.propTypes = {
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

QuickLinksWidget.defaultProps = {
  quickLinks: [], // Default value for quickLinks
};

export default QuickLinksWidget;