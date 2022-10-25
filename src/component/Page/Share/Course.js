import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Info/NewsSummary';

const Course = () => {
    const courseData = useLoaderData();

    return (
        <div>
            <h2>course site {courseData.length}</h2>
            {
                courseData.map(data => <NewsSummary
                    key={data._id}
                    data={data}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Course;