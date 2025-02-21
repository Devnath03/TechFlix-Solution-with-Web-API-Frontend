import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login'; 
import Registration from './Registration'; 
import Dashboard from './Dashboard';
import Orders from './Orders';
import Profile from './Profile';
import Cart from './Cart';
import AdminDashboard from './AdminDashboard';
import AdminOrder from './AdminOrder';
import AdminProducts from './AdminProducts';
import CustomerList from './CustomerList';


export default function RouterPage (){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/' element={<Registration/>}/>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/' element={<Orders/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/' element={<Cart/>}/>

                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/' element={<AdminOrder/>}/>
                <Route path='/' element={<AdminProducts/>}/>
                <Router path='/' element={<CustomerList/>}/>

            </Routes> 
        </Router>


    )
}