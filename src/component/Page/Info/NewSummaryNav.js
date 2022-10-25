import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewSummaryNav = ({ category }) => {
    // console.log(category);
    const { photo_url, name, details } = category
    return (
        <div className='col d-flex justify-content-center '>
            <Card style={{ width: '18rem' }} className=" mt-3 ">
                <Card.Img variant="top" src={photo_url} />
                <Card.Body >
                    <p><small>{details}</small></p>

                    <Link to={`/category/${category.id}`}>
                        <Button variant="light">{name}</Button>

                    </Link>

                </Card.Body>
            </Card>

        </div>
    );
};

export default NewSummaryNav;