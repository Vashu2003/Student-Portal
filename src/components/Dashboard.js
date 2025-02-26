import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";
import {dashboardData} from "./Data"; // Importing the data
import RecentNotificationsWidget from "./RecentNotificationsWidget";
import AttendanceWidget from "./AttendanceWidget";
import UpcomingEventsWidget from "./UpcomingEventsWidget";
import ClassScheduleWidget from "./ClassScheduleWidget";
import QuickLinksWidget from "./QuickLinksWidget";


const Dashboard = ({ personalInfo }) => {
  const availableWidgets = {
    attendance: "Attendance",
    notifications: "Notifications",
    quickLinks: "Quick Links",
    schedule: "Class Schedule",
    events: "Events",
  };

  const savedWidgets =
    JSON.parse(localStorage.getItem("dashboardWidgets")) ||
    Object.keys(availableWidgets);
  const [activeWidgets, setActiveWidgets] = useState(savedWidgets);

  useEffect(() => {
    localStorage.setItem("dashboardWidgets", JSON.stringify(activeWidgets));
  }, [activeWidgets]);

  const handleToggleWidget = (widgetKey) => {
    setActiveWidgets((prevWidgets) =>
      prevWidgets.includes(widgetKey)
        ? prevWidgets.filter((key) => key !== widgetKey) // Remove widget
        : [...prevWidgets, widgetKey] // Add widget
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <Card className="dashboard-card">
          <h4>Personal Details</h4>
          <div className="d-flex align-items-center">
            <div>
              {Object.entries(personalInfo).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</strong> {value}
                </p>
              ))}
            </div>
          </div>
        </Card>
        {activeWidgets.includes("attendance") && (
          <AttendanceWidget
            attendance={dashboardData.attendance}
            attendanceBreakdown={dashboardData.attendanceBreakdown}
          />
        )}
      </div>

      <div className="dashboard-column">
        <Card className="dashboard-card">
          <h5>Manage Widgets</h5>
          {Object.entries(availableWidgets).map(([key, label]) => (
            <Form.Check
              key={key}
              type="checkbox"
              id={key}
              label={label}
              checked={activeWidgets.includes(key)}
              onChange={() => handleToggleWidget(key)}
            />
          ))}
        </Card>
        {activeWidgets.includes("notifications") && (
          <RecentNotificationsWidget notifications={dashboardData.notifications} />
        )}
        {activeWidgets.includes("quickLinks") && (
          <QuickLinksWidget quickLinks={dashboardData.quickLinks} />
        )}
      </div>

      <div className="dashboard-column">
        {activeWidgets.includes("schedule") && (
          <ClassScheduleWidget classSchedule={dashboardData.classSchedule} />
        )}
        {activeWidgets.includes("events") && (
          <UpcomingEventsWidget upcomingEvents={dashboardData.upcomingEvents} />
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  personalInfo: PropTypes.object.isRequired, // Ensure personalInfo is required
};

export default Dashboard;
