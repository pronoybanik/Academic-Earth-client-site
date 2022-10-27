import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <h2>That Is Blog</h2>
            <Card className='mb-4'>
                <Card.Header>1- what is cors?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header>2- Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>

                    <Card.Text>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header>3- How does the private route work?</Card.Header>
                <Card.Body>

                    <Card.Text>
                    The react private route component renders child components  children if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Header>4-  What is Node? How does Node work? </Card.Header>
                <Card.Body>

                    <Card.Text>
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a non blocking approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-4'>
                
                <Card.Body>
                    <h1>points:</h1>

                    <Card.Text>
                    <p>website Name: Academic-Earth</p>
                    <h3>Main point</h3>
                    <p>1. use bootstrap</p>
                    <p>2. use hero icons</p>
                    <p>3. backend server you can change</p>
                    <p>4. login system use facebook and google</p>
                    <p>5. register system in good</p>
                    </Card.Text>

                </Card.Body>
            </Card>

            
        </div>
    );
};

export default Blog;