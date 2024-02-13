import React from "react";
import "../CSS/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Icon } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNdCZoXVgJ2Eztmo8~kv-I7e6XLooTLbiCfRkIXTYNXBi7yHik1nGTfuVMwVTlgxPmEqS6Rh72dEZbbzYbc1BAlnu9fXiwa2bAMvl4SnK7fVRcGLr2R58tAQ3Abog24hUox9Ur4d4bc5fyK75PXxoAQuiXlkJbOZeaJgsp34m0Np12jqsN33xSAtTiMOIRCcSvbRYPGDJY17DtgwpyBYXv-qmo4YpW9CeJsNRt6vczo2EEuXUsB6dJtRT-ld2~OYwHWeCQbP3XoszPktb-0NInT-ewF-0U2NM4qlTwJ196Fm0QobgF-Mg6ugatjCIBu4jrLwh93Tl4HuvOYw3ECmUw__"
            className="logo"
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle>
          <Icon name="search" size="large" className="explore-icon icon-margin"/>
          <Icon name="bell" size="large" className="explore-icon icon-margin"/>
          <Icon name="bars" size="large" className="explore-icon icon-margin"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          
            <InputGroup className="search-bar">
              <Form.Control
                type="text"
                placeholder="Search here..."
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <InputGroup.Text id="btnGroupAddon">
                <Icon color="#8064A2" name="search" />
              </InputGroup.Text>
            </InputGroup>
          
          <Nav className="justify-content-end navbar-tools">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Icon name="compass" className="explore-icon" size="large"/> Explore
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  People - Community
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Places - Venues</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                  Programs - Events
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                  Products - Store
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Blogs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Icon name="star" className="explore-icon" size="large" /> Hobbies
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  People - Community
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Places - Venues</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                  Programs - Events
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                  Products - Store
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Blogs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Icon name="bookmark" size="large" className="explore-icon icon-margin"/>
            <Icon name="bell" size="large" className="explore-icon icon-margin"/>
            <Icon name="shopping cart" size="large" className="explore-icon icon-margin"/>
            <Button className="signin-btn">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
