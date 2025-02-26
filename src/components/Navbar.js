import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const NavbarComponent = ({ activeTab, setShowEditModal, handleLogout }) => {
  

  
  return (
    <Navbar expand="lg" className={`custom-navbar `}>
      <Navbar.Brand className="navbar-brand">Home / {activeTab}</Navbar.Brand>
      <Nav className="ms-auto d-flex align-items-center">
        
        {/* User Dropdown */}
        <Dropdown className="user-dropdown">
          <Dropdown.Toggle variant="link" className="user-icon">
            <FaUser />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item onClick={() => setShowEditModal(true)}>
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
