import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import { DarkContext } from '../../../App';

const SideNav = () => {
    const [categories, setCategories] = useState([])
    const {dark} = useContext(DarkContext)
    useEffect(() => {
        fetch('https://pro-tech-edu-online-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className={dark ? 'lg:bg-gray-900 text-gray-300 lg:h-[100%] lg:p-2' : 'lg:bg-[#F3F4F6] text-black lg:h-[100%] lg:p-2'}>
            {
                categories.map(category => <li className='lg:mb-5' key={category.id}><Link className='hover:text-blue-500' to={`/course/${category.id}`}>{category.name}</Link></li>)
            }
        </div>
    );
};

export default SideNav;