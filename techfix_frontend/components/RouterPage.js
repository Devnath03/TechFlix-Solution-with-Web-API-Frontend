import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login'; 
import Registration from './Registration'; 
import Dashboard from './Dashboard';
import Orders from './Orders';
import Profile from './Profile';
import Cart from './Cart';


export default function RouterPage (){
    return(
        <Router>
            <Routes>
                <Router path='/' element={<Login/>}/>
                <Router path='/' element={<Registration/>}/>
                <Router path='/' element={<Dashboard/>}/>
                <Router path='/' element={<Orders/>}/>
                <Router path='/' element={<Profile/>}/>
                <Router path='/' element={<Cart/>}/>
            </Routes> 
        </Router>


    )
}