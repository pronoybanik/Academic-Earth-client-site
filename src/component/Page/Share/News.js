import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card'; 



const News = () => {
    const data = useLoaderData();
    console.log('data', data);
    const { image_url, title, details } = data;
    return (
        <div>
            <h2>news page</h2>
            <Card className="bg-dark text-white">
      <Card.Img src={image_url} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
            
            </div>

        
    );
};

export default News;