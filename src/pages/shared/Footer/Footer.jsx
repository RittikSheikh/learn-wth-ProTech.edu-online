import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="dark:bg-gray-800 dark:text-gray-50">
                <div className="container flex flex-col items-center p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                    <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>
                    </ul>
                    <p>ProTech.edu-online. All rights reserved <span>&copy;copyright 2023</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;