import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import EditProfileModal from "./components/EditProfileModal";
import { renderContent } from "./components/renderContent";
import { defaultPersonalInfo, defaultCredentials } from "./components/Data"; // Importing data
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showEditModal, setShowEditModal] = useState(false);

  const [personalInfo, setPersonalInfo] = useState(() => {
    const savedInfo = localStorage.getItem("personalInfo");
    return savedInfo ? JSON.parse(savedInfo) : defaultPersonalInfo;
  });

  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  // const handleEditChange = (e) => {
  //   const { name, value } = e.target;
  //   setPersonalInfo({ ...personalInfo, [name]: value });
  // };

  const handleSaveChanges = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
    localStorage.setItem("personalInfo", JSON.stringify(updatedInfo));
  };

  const handleLogin = (email, password) => {
    if (
      email === defaultCredentials.email &&
      password === defaultCredentials.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials! Use student@example.com / password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="d-flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-grow-1">
        <Navbar
          activeTab={activeTab}
          setShowEditModal={setShowEditModal}
          handleLogout={handleLogout}
        />
        <Container className="mt-3">
          {renderContent(activeTab, personalInfo)}
        </Container>
      </div>
      <EditProfileModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        personalInfo={personalInfo}
        handleSaveChanges={handleSaveChanges} // Only this function is needed
      />
    </div>
  );
};

export default App;
