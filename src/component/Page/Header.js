import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser, FaXRay } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Router/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }


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
                        </Nav>
                        <div>
                            {
                                user?.uid ?
                                    <>

                                        <Button className='btn-info' onClick={handleLogout}>Log Out</Button>
                                        <p className=''>Name: {user?.displayName}</p>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>

                                            <Button className='btn btn-light'>LogIn</Button>
                                        </Link>
                                        <Link to='/register'>
                                            <Button className='btn btn-light'>Register</Button>
                                        </Link>
                                    </>

                            }
                        </div>

                        <div className='me-2 mt-2'>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>

                                </Image>
                                : <FaUser></FaUser>
                            }
                        </div>




                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;