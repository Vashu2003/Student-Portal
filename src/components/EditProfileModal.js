import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditProfileModal = ({
  showEditModal,
  setShowEditModal,
  personalInfo,
  handleSaveChanges,
}) => {
  const [tempInfo, setTempInfo] = useState(personalInfo);

  // Sync tempInfo with personalInfo when modal opens
  useEffect(() => {
    if (showEditModal) {
      setTempInfo({ ...personalInfo }); // Ensure fresh data every time
    }
  }, [showEditModal, personalInfo]);
  

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setTempInfo({ ...tempInfo, [name]: value });
  };

  const handleSave = () => {
    handleSaveChanges(tempInfo); // Update the main state only when saved
    setShowEditModal(false);
  };

  return (
    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Personal Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {Object.keys(tempInfo).map((key) => (
            <Form.Group key={key} className="mb-3">
              <Form.Label>
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </Form.Label>
              <Form.Control
  type="text"
  name={key}
  value={tempInfo[key] || ""}
  onChange={handleEditChange}
/>

            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
