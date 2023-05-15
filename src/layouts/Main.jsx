import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <div className='p-2'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;