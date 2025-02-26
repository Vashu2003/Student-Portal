import { Nav } from "react-bootstrap";
import { FaTachometerAlt, FaBook, FaChartBar, FaClipboardList } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar d-flex flex-column p-3">
      {/* Logo Section */}
      <div className="sidebar-header text-center mb-3">
        <img src="/logo.png" alt="Logo" className="sidebar-logo img-fluid mb-2" />
        <h4 className="text-white d-none d-md-block">Student Portal</h4>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column">
        <Nav.Link
          onClick={() => setActiveTab("Dashboard")}
          className={`sidebar-link ${activeTab === "Dashboard" ? "active text-primary" : ""}`}
        >
          <FaTachometerAlt className="me-2" />
          <span className="d-none d-md-inline">Dashboard</span>
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveTab("Courses")}
          className={`sidebar-link ${activeTab === "Courses" ? "active text-primary" : ""}`}
        >
          <FaBook className="me-2" />
          <span className="d-none d-md-inline">Courses</span>
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveTab("Results")}
          className={`sidebar-link ${activeTab === "Results" ? "active text-primary" : ""}`}
        >
          <FaChartBar className="me-2" />
          <span className="d-none d-md-inline">Results</span>
        </Nav.Link>
        <Nav.Link
          onClick={() => setActiveTab("Assignments")}
          className={`sidebar-link ${activeTab === "Assignments" ? "active text-primary" : ""}`}
        >
          <FaClipboardList className="me-2" />
          <span className="d-none d-md-inline">Assignments</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
