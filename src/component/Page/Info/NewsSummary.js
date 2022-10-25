import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const NewsSummary = ({ info }) => {
    console.log(info);
    const { details, image_url, title , _id} = info;

    return (
        <div>

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={image_url} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {
                                        details.length > 200 ?
                                            <p> {details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                                            :
                                            <p>{details}</p>
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default NewsSummary;