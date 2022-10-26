import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaLowVision } from "react-icons/fa";

const PremiumCard = ({data}) => {
    console.log(data);
    const {author, details, image_url, title, total_view} = data
    return (
        <div>
            <h2>that is card 2</h2>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-info'>
            <p>{author.name}</p>
            <p><small>{author.published_date}</small></p>
         <p><FaLowVision></FaLowVision>{total_view}</p>

        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-info'>
            <p>{author.name}</p>
            <p><small>{author.published_date}</small></p>
         <p><FaLowVision></FaLowVision>{total_view}</p>

        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-info'>
            <p>{author.name}</p>
            <p><small>{author.published_date}</small></p>
         <p><FaLowVision></FaLowVision>{total_view}</p>

        </Card.Footer>
      </Card>
    </CardGroup>
        </div>
    );
};

export default PremiumCard;