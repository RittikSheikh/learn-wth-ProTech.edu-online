import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../shared/SideNav/SideNav';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid lg:grid-cols-12'>
            <div className='col-span-2 hidden lg:block'>
                <SideNav/>
            </div>
            <div className='col-span-10 lg:ms-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    courses.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;