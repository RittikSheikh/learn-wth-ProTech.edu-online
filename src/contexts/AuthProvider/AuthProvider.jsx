import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext();




const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // all authentication functions goes down here
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const googleLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    
    const facebookLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    const githubLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }


    const createdUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        } )
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }


    // getting the current user

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
          return () => unSubscribe()
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            createUser,
            googleLoginUser,
            facebookLoginUser,
            githubLoginUser,
            createdUser,
            updateUserProfile,
            loginUser,
            logOutUser,
            loading,
            setLoading,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;