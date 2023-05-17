import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();




const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // all authentication functions goes down here
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const googleLoginUser = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    const facebookLoginUser = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const githubLoginUser = () => {
        return signInWithPopup(auth, githubProvider);
    }


    const createdUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        } )
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // getting the current user

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
           unSubscribe()
    }, [])


console.log(user)

    return (
        <AuthContext.Provider value={{
            user,
            createUser,
            googleLoginUser,
            facebookLoginUser,
            githubLoginUser,
            createdUser,
            updateUserProfile,
            loginUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;