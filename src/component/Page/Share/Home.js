import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Info/NewsSummary';

const Home = () => {
    const homeData = useLoaderData()
    return (
        <div>
            <h2>Home page: {homeData.length}</h2>
            {
              homeData.map(data => <NewsSummary 
              key={data._id}
              data={data}
              ></NewsSummary>)  
            }
        </div>
    );
};

export default Home;