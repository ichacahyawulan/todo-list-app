import React from 'react';
import { isLogin } from './../services/authService';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = isLogin(); // determine if authorized

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/v1/login" />;
}

export default PrivateRoute;