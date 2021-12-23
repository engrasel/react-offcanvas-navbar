import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavbarBrand,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col xs={3}>
            <NavbarBrand className="text-uppercase" to="/">
              <img
                src="https://engrasel.me/wp-content/uploads/2021/04/engrasel-logo.gif"
                width="150"
                height="70"
                className="d-inline-block align-top"
                alt="Engrasel"
              />
            </NavbarBrand>
          </Col>
          <Col xs={9}>
            <Nav className="justify-content-end text-uppercase d-none d-sm-none d-md-flex">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="Web-Design">
                  Web Design
                </Link>

                <Link className="dropdown-item" to="WordPress-Development">
                  WordPress Development
                </Link>
                <Link className="dropdown-item" to="Shopify">
                  Shopify
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="React-Design">
                  React Design
                </Link>
              </NavDropdown>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
            <Button onClick={handleShow} className="d-block ms-auto d-md-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <NavbarBrand className="text-uppercase px-3" to="#home">
            <img
              src="https://engrasel.me/wp-content/uploads/2021/04/engrasel-logo.gif"
              width="150"
              height="70"
              className="d-inline-block align-top"
              alt="Engrasel"
            />
          </NavbarBrand>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="text-uppercase flex-column" id="offcanvas_menu">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="Web-Design">
                Web Design
              </Link>

              <Link className="dropdown-item" to="WordPress-Development">
                WordPress Development
              </Link>
              <Link className="dropdown-item" to="Shopify">
                Shopify
              </Link>
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="React-Design">
                React Design
              </Link>
            </NavDropdown>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navbar;
