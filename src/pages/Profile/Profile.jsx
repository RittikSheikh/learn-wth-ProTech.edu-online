import React, { useContext, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Profile = () => {
    const { user, setUser, logOutUser } = useContext(AuthContext)


    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
  
   
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleBioChange = (e) => {
      setBio(e.target.value);
    };

    const handleLogOut = () => {
        logOutUser()
        .then(() => console.log('user log out success'))
        .catch(error => console.error(error))
    }
    const [name, setName] = useState('John Doe');
    const [photo, setPhoto] = useState(
      'https://via.placeholder.com/150?text=Profile+Photo'
    );
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePhotoChange = (event) => {
      setPhoto(event.target.value);
    };
  
    return (
        <div className="max-w-md mx-auto md:p-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={user?.photoURL}
            alt="Profile"
          />
          <input
            type="text"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter photo URL"
            value={photo}
            onChange={handlePhotoChange}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
            User Profile
          </div>
          <div className="mt-2">
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleLogOut}>log out</button>
    </div>
    );
};

export default Profile;