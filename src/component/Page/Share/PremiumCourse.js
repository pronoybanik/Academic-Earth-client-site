import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumCard from '../Info/premiumCard';


const PremiumCourse = () => {
    const courseData = useLoaderData()

    return (
        <div>
            <h2> Premium Course</h2>
            {
                courseData.map(data => <PremiumCard
                key={data}
                data={data}
                ></PremiumCard>)
            }
        </div>
    );
};

export default PremiumCourse;