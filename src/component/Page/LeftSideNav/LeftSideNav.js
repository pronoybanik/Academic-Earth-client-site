import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NewSummaryNav from '../Info/NewSummaryNav';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://academic-earth-server-pronoybanik.vercel.app/subject-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1>That Type Of  Course We Have Join</h1>
            {
                categories.map(category => <NewSummaryNav
                    key={category}
                    category={category}

                ></NewSummaryNav>)
            }
        </div>
    );
};

export default LeftSideNav;