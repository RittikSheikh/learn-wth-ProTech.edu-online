import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { DarkContext } from '../../App';


const Profile = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const {dark} = useContext(DarkContext)


    const handleLogOut = () => {
        logOutUser()
        .then(() => console.log('user log out success'))
        .catch(error => console.error(error))
    }
  
  
  
    return (
      <div className={dark ? 'py-10 md:py-36 bg-black' : 'py-10 md:py-36 bg-white'}>
<div className="max-w-md mx-auto md:p-10 my-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover rounded-s-xl md:h-full md:w-48"
            src={user?.photoURL}
            alt="Profile"
          />
        </div>
        <div className={dark ? 'p-8 bg-gray-800 text-white' : 'p-8 bg-white text-black'}>
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
            User Profile
          </div>
          <hr className='my-2' />
            <p className='font-semibold'>Name : {user?.displayName}</p>
            <p>Email : {user?.email}</p>
            <p>photoURL : {user?.photoURL}</p>
        </div>
      </div>
      <div className='w-[250px] mx-auto mt-10 '>
      <button onClick={handleLogOut} className='font-semibold text-white bg-indigo-500 p-5 mb-5 rounded-lg w-full'>Logout</button>
      </div>
    </div>
      </div>
    );
};

export default Profile;