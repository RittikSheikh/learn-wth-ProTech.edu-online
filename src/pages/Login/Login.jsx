import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { googleLoginUser, facebookLoginUser, githubLoginUser, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const googleLogin = () => {
        googleLoginUser()
            .then(result => {
                const user = result.user;
                console.log('google log in user', user)
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error))
    }

    const handleFacebookLogin = () => {
        facebookLoginUser()
        .then(result => {
            const user = result.user;
            console.log('facebook log in user', user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleGithubLogin = () => {
        githubLoginUser()
        .then(result => {
            const user = result.user;
            console.log('github log in user', user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    const handleLoginUser = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
            const user = result.user
            console.log('log in user with email and password', user)
            navigate(from, {replace: true})
        }).catch(error => {
            toast.error(`${error.message}`);
            console.error(error)
        })
        form.reset();
    }

    return (
        <div className='py-10 md:py-36'>
            <div className="form-container w-full md:w-[500px] mx-auto my-10 p-2 lg:p-[50px] rounded-md">
                <h1 className='font-bold text-2xl text-center my-4'>welcome to login page !</h1>
                <form onSubmit={handleLoginUser}>
                    <input className='mt-[35px] input-btn' type="email" name="email" id="email" placeholder='Email address' /> <br />
                    <input className='input-btn' type="password" name="password" id="" placeholder='Password' /> <br />
                    <p className='text-slate-600 mb-5'>{`Don't have an account?`} <Link to='/register'><span className='text-blue-500 underline'>Register</span></Link></p>
                    <input className='bg-blue-400 w-full rounded-md font-semibold hover:bg-blue-500 hover:text-white' type="submit" value="Login" />
                </form>
                <hr className='form-hr' />
                <p className='text-center my-4'>Or login with <span onClick={googleLogin} className='ms-5 me-2 hover:cursor-pointer'><img src={google} alt='googleIcon' className='w-[30px] h-[30px] inline  rounded-full'></img></span> <span onClick={handleFacebookLogin} className='hover:cursor-pointer me-2'><img src={facebook} alt='facebookIcon' className='text-blue-500 w-[30px] h-[30px] inline rounded-full'></img></span><span onClick={handleGithubLogin} className='hover:cursor-pointer'><img src={github} alt='facebookIcon' className='text-blue-500 w-[30px] h-[30px] inline rounded-full'></img></span></p>
            </div>
        </div>
    );
};

export default Login;