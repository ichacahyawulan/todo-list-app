import React from 'react';

import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';

import LoginPage from '../components/page/LoginPage';
import SignUpPage from '../components/page/SignUpPage';

import MainPage from '../components/page/MainPage';

const AppRoute = () => (
    <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<MainPage/>}/>
        </Route>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
    </Routes>
);


export default AppRoute;