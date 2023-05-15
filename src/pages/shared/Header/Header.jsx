import React, { useState } from 'react';
import logo from '../../../assets/images/ebook.png';
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to='/home'>
              <img className='w-[50px] h-[45px] mr-1 inline' src={logo} alt="" />
              </Link>
                <h4 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">ProTech.edu</h4>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <HiBars3BottomRight></HiBars3BottomRight>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-between" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col mt-4 lg:mt-0  lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to='/courses'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Courses</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/blog'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/faq'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">FAQ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/profile'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/toggleTheme'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Toggle Theme</span>
                </Link>
              </li>
            </ul>
            <div className='lg:hidden'>
              <SideNav></SideNav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;