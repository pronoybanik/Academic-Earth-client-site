import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaXRay } from "react-icons/fa";

const Header = () => {
    return (
        <div className='mb-5 sticky-top'>

            <Navbar bg="light" expand="lg" >
                <Container >
                    
                    <Navbar.Brand className='text-primary ' style={{ width: '15rem' }}><FaXRay></FaXRay>  Academic-Earth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Link to='/'>
                                    <Button className='btn btn-light'>Home</Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/premiumcourse'>
                                    <Button className='btn btn-light'>premium Course</Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/blog'>
                                    <Button className='btn btn-light'>Blog</Button>
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

                        </Nav>
                        <div>
                            <Link to='/login'>
                                <Button className='btn btn-light'>LogIn</Button>
                            </Link>
                            <Link to='register'>
                                <Button className='btn btn-light'>Register</Button>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;