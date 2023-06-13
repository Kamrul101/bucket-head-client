import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

import UseAdmin from '../Hooks/UseAdmin';
import useAuth from '../Hooks/useAuth';


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading]=UseAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;