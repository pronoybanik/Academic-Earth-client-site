import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Router/AuthProvider';

const Login = () => {
    const { logInSite, googleLogin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation()
    const list = location.state?.from?.pathname || '/';


    //   google login
    const provider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

    const handleFacebook = () => {
        googleLogin(facebookProvider)
            .then(result => {
                const user = result.user
                console.log(user);


            })
            .catch(error => console.error(error))
    }


    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user
                console.log(user);


            })
            .catch(error => console.error(error))

    }



    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);

        logInSite(email, password)

            .then(result => {
                const user = result.user
                console.log(user);
                from.reset('');
                navigate(list, { replace: true })
                toast("Register success");
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='mt-4'>
            <h2>Please LogIn</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>You Have A Now Account <Link to="/register"> Register</Link></p>
                </Form.Group>

                <Button variant="info" type="submit">
                    LogIn
                </Button>
                <div className='mt-2'>
                    <Button onClick={handleGoogle} className='mb-2' variant="outline-primary "><FaGoogle></FaGoogle> Login with Google </Button>
                    <br />
                    <Button onClick={handleFacebook} variant="outline-secondary"><FaFacebookF></FaFacebookF> Login With FaceBook</Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;