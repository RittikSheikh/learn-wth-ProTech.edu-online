import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
const Register = () => {
    return (
        <div>
            <div className="form-container w-full md:w-[500px] mx-auto my-10 p-2 lg:p-[50px] rounded-md">
                <h1 className='font-bold text-2xl text-center my-4'>welcome to register page !</h1>
                <form action="">
                    <input className='mt-[35px] input-btn' type="text" name="name" id="fullName" placeholder='Full Name' /> <br />
                    <input className='input-btn' type="text" name="name" id="photoURL" placeholder='Photo URL' /> <br />
                    <input className='input-btn' type="email" name="email" id="email" placeholder='Email address' /> <br />
                    <input className='input-btn' type="password" name="password" id="" placeholder='Password' /> <br />
                    <p className='text-slate-600 mb-5'>{`Already have an account?`} <Link to='/login'><span className='text-blue-500 underline'>Login</span></Link></p>
                    <input className='bg-blue-400 w-full rounded-md font-semibold hover:bg-blue-500 hover:text-white' type="submit" value="Register" />
                </form>
                <hr className='form-hr' />
                <p className='text-center my-4'>Or register with <span className='ms-5 me-2 hover:cursor-pointer'><img src={google} alt='googleIcon' className='w-[30px] h-[30px] inline  rounded-full'></img></span> <span className='hover:cursor-pointer'><img src={facebook} alt='facebookIcon' className='text-blue-500 w-[30px] h-[30px] inline rounded-full'></img></span></p>
            </div>
        </div>
    );
};

export default Register;