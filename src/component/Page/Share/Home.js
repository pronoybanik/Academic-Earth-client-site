import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Info/NewsSummary';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2>Home page: {data.length}</h2>
            {
              data.map(info => <NewsSummary 
              key={info}
              info={info}
              ></NewsSummary>)  
            }
        </div>
    );
};

export default Home;