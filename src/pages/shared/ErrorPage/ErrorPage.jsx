import React from 'react';
import warningImg from '../.../../../../assets/images/warning.png';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <img className='w-40 h-40 ' src={warningImg} alt="" />
                    <p className="text-3xl text-success">Looks like you try something wrong <span className='text-warning'>!</span></p>
                    <Link to='/home' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-blue-400 text-red-700">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;