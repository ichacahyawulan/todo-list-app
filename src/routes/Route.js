import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';

import LoginPage from '../components/page/LoginPage';
import SignUpPage from '../components/page/SignUpPage';

import MainPage from '../components/page/MainPage';

const AppRoute = () => (
    <Routes>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Navigate to='/v1' />} />
        </Route>
        <Route exact path='/v1' element={<PrivateRoute/>}>
            <Route exact path='/v1' element={<MainPage/>}/>
        </Route>
        <Route exact path='/v1' element={<MainPage/>}/>
        <Route exact path='/v1/signup' element={<SignUpPage/>}/>
        <Route exact path='/v1/login' element={<LoginPage/>}/>
    </Routes>
);


export default AppRoute;