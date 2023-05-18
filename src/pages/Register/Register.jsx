import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Register = () => {

const {createdUser, googleLoginUser, facebookLoginUser, githubLoginUser, updateUserProfile} = useContext(AuthContext);


    const handleCreateUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createdUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('email&password created user', user)
            updateUserProfile(name, photoURL)
            .then(() => {
                console.log('user profile updated with name and photoURL')
            }).catch(error => console.error(error))
    
        }).catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        googleLoginUser()
        .then(result => {
            const user = result.user;
            console.log('google log in user', user)
        })
        .catch(error => console.error(error))
    }

    const handleFacebookLogin = () => {
        facebookLoginUser()
        .then(result => {
            const user = result.user;
            console.log('facebook log in user', user)
        })
        .catch(error => console.error(error))
    }

    const handleGithubLogin = () => {
        githubLoginUser()
        .then(result => {
            const user = result.user;
            console.log('github log in user', user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='py-10 md:py-36'>
            <div className="form-container w-full md:w-[500px] mx-auto my-10 p-2 lg:p-[50px] rounded-md">
                <h1 className='font-bold text-2xl text-center my-4'>welcome to register page !</h1>
                <form onSubmit={handleCreateUser} action="">
                    <input className='mt-[35px] input-btn' type="text" name="name" id="fullName" placeholder='Full Name' /> <br />
                    <input className='input-btn' type="text" name="photoURL" id="photoURL" placeholder='Photo URL' /> <br />
                    <input className='input-btn' type="email" name="email" id="email" placeholder='Email address' /> <br />
                    <input className='input-btn' type="password" name="password" id="" placeholder='Password' /> <br />
                    <p className='text-slate-600 mb-5'>{`Already have an account?`} <Link to='/login'><span className='text-blue-500 underline'>Login</span></Link></p>
                    <input className='bg-blue-400 w-full rounded-md font-semibold hover:bg-blue-500 hover:text-white' type="submit" value="Register" />
                </form>
                <hr className='form-hr' />
                <p className='text-center my-4'>Or register with <span onClick={handleGoogleLogin} className='ms-5 me-2 hover:cursor-pointer'><img src={google} alt='googleIcon' className='w-[30px] h-[30px] inline  rounded-full'></img></span> <span onClick={handleFacebookLogin} className='hover:cursor-pointer me-2  '><img src={facebook} alt='facebookIcon' className='text-blue-500 w-[30px] h-[30px] inline rounded-full'></img></span><span onClick={handleGithubLogin} className='hover:cursor-pointer'><img src={github} alt='facebookIcon' className='text-blue-500 w-[30px] h-[30px] inline rounded-full'></img></span></p>
            </div>
        </div>
    );
};

export default Register;