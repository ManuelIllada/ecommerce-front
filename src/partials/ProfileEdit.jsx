import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

//name y props son los de arriba en options

function ProfileEdit({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  //el button va en el dropdwon
  return (
    <>
      <a
        onClick={toggleShow}
        class="link-secondary dropdown-item text-white"
        href="#"
      >
        {name}
      </a>

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
