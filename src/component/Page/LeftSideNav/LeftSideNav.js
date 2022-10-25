import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NewSummaryNav from '../Info/NewSummaryNav';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/subject-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>LestSideNav page: {categories.length}</h2>
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