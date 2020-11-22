import React from "react";
import "./Nav.css"
import Nav from 'react-bootstrap/Nav'

const Navv = () => {
  return (
    <div className="nav">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">SERVICES</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">JOIN</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navv;
