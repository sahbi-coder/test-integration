import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import logo from "../../images/logo.png";

function Bar() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "transparent",
        padding: "2%",
        position: "absolute",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className=" my-2 my-lg-0"
          navbarScroll
          style={{ marginLeft: "15%" }}
        >
          <Nav.Link to="/home" style={{ color: "#e58f00", fontSize: "1.5em" }}>
            HOME
          </Nav.Link>
          <Nav.Link to="/about" style={{ color: "white", fontSize: "1.5em" }}>
            ABOUT
          </Nav.Link>
          <Nav.Link to="/contact" style={{ color: "white", fontSize: "1.5em" }}>
            NEWS
          </Nav.Link>
          <Nav.Link to="/home" style={{ color: "white", fontSize: "1.5em" }}>
            OFFERS
          </Nav.Link>

          <Navbar.Brand href="#home" className="logo">
            <img src={logo} alt="background" />
          </Navbar.Brand>

          <Nav.Link to="/about" style={{ color: "white", fontSize: "1.5em" }}>
            GALLERY
          </Nav.Link>
          <Nav.Link to="/contact" style={{ color: "white", fontSize: "1.5em" }}>
            CONTACT
          </Nav.Link>
          <Nav.Link to="/contact" style={{ color: "white", fontSize: "1.5em" }}>
            BLOG
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Bar;
