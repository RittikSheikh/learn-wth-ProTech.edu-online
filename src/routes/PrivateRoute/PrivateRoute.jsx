import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, setUser, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="w-16 h-16 mx-auto my-60 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;