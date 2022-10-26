import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { AuthContext } from '../../Router/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
    const { googleLogin, createUser, updateUseProfiles } = useContext(AuthContext)
    const [error, setError] = useState('')

    // Google login
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user
                console.log(user);


            })
            .catch(error => console.error(error))

    }

    // email or password login

    

    






    return (
        <div>
            <h2>That is Register</h2>
            <Form onSubmit={handleSubmit}>
                <ToastContainer style={{ hight: '100px' }}></ToastContainer>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Image" />

            </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" />
                     */}
                    <p>{error}</p>
                </Form.Group>

                <Button variant="info " type="submit">
                    sing Up
                </Button>
                <p>You Have A Accounts- <Link to='/login'> LogIn</Link></p>
                <div className='mt-2'>
                    <Button onClick={handleGoogle} className='mb-2' variant="outline-primary "><FaGoogle></FaGoogle> Login with Google </Button>
                    <br />
                    <Button variant="outline-secondary"><FaFacebookF></FaFacebookF> Login With Github</Button>
                </div>

            </Form>
        </div>
    );
};

export default Register;