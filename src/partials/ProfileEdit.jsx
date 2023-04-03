import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function ProfileEdit({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div onClick={toggleShow} class="link-secondary dropdown-item text-white">
        {name}
      </div>

      <Offcanvas
        scroll="true"
        backdrop="true"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Profile Edit</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProfileEdit;
