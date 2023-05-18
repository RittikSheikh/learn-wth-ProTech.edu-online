import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { DarkContext } from '../../../App';

const CourseCard = ({ course }) => {
    const { img, name, id, description, price } = course;

    const {dark} = useContext(DarkContext)

    return (
        <div>
            <div className="mx-auto max-w-md overflow-hidden rounded-lg drop-shadow-lg">
                <img
                    src={img}
                    className="aspect-video w-full object-cover"
                    alt=""
                />
                <div className={dark ? 'bg-slate-900 p-2' : 'bg-white && p-2'}>
                    <p className="mb-1 text-sm font-semibold text-orange-600 text-primary-500">price: {price}</p>
                    <h3 className={dark ? 'text-xl font-medium text-white' : 'text-xl font-medium text-black'}>{name}</h3>
                    <p className="mt-1 text-gray-500">{description.slice(0, 150) + '...'}</p>
                    <div className="mt-4">
                        <Link to={`/course/${id}`}
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;