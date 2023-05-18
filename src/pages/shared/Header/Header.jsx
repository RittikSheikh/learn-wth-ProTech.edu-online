import React, { useContext, useState } from 'react';
import logo from '../../../assets/images/ebook.png';
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import './Header.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DarkContext } from '../../../App';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { dark, setDark } = useContext(DarkContext);

  const handleChangeTheme = () => {
    setDark(!dark)
  }

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/home' className={(isActive) => isActive ? 'active' : undefined}>
              <img className='w-[50px] h-[45px] mr-1 inline' src={logo} alt="" />
            </NavLink>
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
                <NavLink to='/courses'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75'
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Courses</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/blog'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/faq'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="ml-2">FAQ</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                >
                  {
                    user ? <Link to='/profile'><img className='w-[30px] h-[30px] rounded-full' src={user.photoURL} alt="userPhoto" title={user.displayName} /></Link> : <Link to='/login'>login</Link>
                  }
                </span>
              </li>
              <li className="nav-item">
                <label htmlFor="Toggle1" className="inline-flex mt-2 space-x-4 cursor-pointer">
                  <span className="relative">
                    <input onClick={handleChangeTheme} id="Toggle1" type="checkbox" className="hidden peer" />
                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-white peer-checked:dark:bg-gray-500"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                  </span>
                </label>
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