import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const SelectedCourse = () => {
    const course = useLoaderData();
    const { img, id, name, price, description } = course;

    return (
        <div>
            <div className="mx-auto rounded-lg md:flex bg-white drop-shadow-lg md:drop-shadow-none md:my-10">
                <img
                    src={img}
                    className="aspect-video w-full md:max-w-sm lg:max-w-3xl object-cover"
                    alt=""
                />
                <div className="p-4 lg:p-10">
                    <p className="mb-1 text-sm font-semibold text-orange-600 text-primary-500">price: {price}</p>
                    <h3 className="text-xl font-medium text-gray-900">{name}</h3>
                    <p className="mt-1 text-gray-500">{description}</p>
                    <div className="mt-4 flex">
                        <Link to='/courses'
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 me-5"
                        >
                            Back To Courses
                        </Link>
                        <button onClick={()=>{toast.success('purchase success',)}} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-orange-600 outline-none">Buy This Course</button>
                </div>
            </div>
        </div>
        </div >
    );
};

export default SelectedCourse;