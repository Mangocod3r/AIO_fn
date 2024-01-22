import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav } from 'react-bootstrap';
import Navbar_ from './Navbar_';
function Home() {
 

  return (
    <>
    <Navbar_/>
    <h1 className="home-head">Home Page</h1>
    </>
    // <Navbar bg="light" shadow="lg" expand="lg">
    //   <Navbar.Brand href="#home">HOME PAGE</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto" style={navItemsStyle}>
    //       <Nav.Link href="/food">Food</Nav.Link>
    //       <Nav.Link href="/sport">Sport</Nav.Link>
    //       <Nav.Link href="/movie"> <i className="bi bi-film"></i> Movie</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default Home;
