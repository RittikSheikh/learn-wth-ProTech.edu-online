import React, { useContext } from 'react';
import './Home.css';
import homeImg from '../../assets/images/office.png';
import { Link } from 'react-router-dom';
import { DarkContext } from '../../App';

const Home = () => {
    const {dark} = useContext(DarkContext);
    return (
        <div className='py-10 md:py-36'>
            <section className={dark ? "dark:bg-black dark:text-gray-100" : "dark:bg-white dark:text-black"}>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={homeImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className=" text-2xl md:text-5xl font-bold leading-none sm:text-6xl">Welcome to 
				<span className="dark:text-blue-400"> ProTec.edu</span> online
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Get ready for skilled yourself in online platform !
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to='/courses' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">Get Started</Link>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;