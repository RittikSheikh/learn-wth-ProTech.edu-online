import React, { useContext } from 'react';
import { DarkContext } from '../../App';

const Blog = () => {

    const {dark} = useContext(DarkContext)

    return (
        <div className='py-10 md:py-60'>
            <h1 className='font-bold text-blue-500'>* What is CORS ?</h1>
            <p className={dark ? 'text-white' : 'text-black'}><span className='bg-blue-400 rounded-sm text-white px-2'>ans:</span> CORS is stands for Cross Origin Resource. When we create a server side and want to give access our data to others then we need to use CORS otherwise the data can not be shared for the CORS policy.</p>
            <h1 className='font-bold text-blue-500 mt-3'>* Why iam using firebase? What other options do you have to implement authentication?</h1>
            <p className={dark ? 'text-white' : 'text-black'}><span className='bg-blue-400 rounded-sm text-white px-2'>ans:</span> I am using firebase because it is the best and safest way for the authentication. And also i know about firebase than the others thats might be a reason for me. The other authentication systems are OAuth, Telesign, Authgear and many others. But the firebase is the safest for that purpose because it comes from google.</p>
            <h1 className='font-bold mt-3 text-blue-500'>* How does the private route work?</h1>
            <p className={dark ? 'text-white' : 'text-black'}><span className='bg-blue-400 rounded-sm text-white px-2'>ans:</span> The Private route works a protector. It ensure the requirements of the client. If the requirements does not match, it send the user to the requirement component and when the user fill up the requirement it take the user to its children component.</p>
            <h1 className='font-bold mt-3 text-blue-500'>* What is Node? How does Node work?</h1>
            <p className={dark ? 'text-white' : 'text-black'}><span className='bg-blue-400 rounded-sm text-white px-2'>ans: </span> </p>
        </div>
    );
};

export default Blog;