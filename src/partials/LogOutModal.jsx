import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { logOutUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogOutModal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit() {
    dispatch(logOutUser());
    navigate("/login");
  }

  return (
    <>
      <a
        onClick={handleShow}
        class="link-secondary dropdown-item text-white"
        href="#"
      >
        Logout
      </a>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ opacity: "85%", background: "gray" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-danger" onClick={handleSubmit}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogOutModal;
