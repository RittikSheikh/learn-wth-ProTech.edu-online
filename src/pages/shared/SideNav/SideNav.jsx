import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://pro-tech-edu-online-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='lg:bg-[#F3F4F6] lg:h-[100vh] lg:p-2'>
            {
                categories.map(category => <li className='lg:mb-5' key={category.id}><Link className='hover:text-blue-500' to={`/course/${category.id}`}>{category.name}</Link></li>)
            }
        </div>
    );
};

export default SideNav;