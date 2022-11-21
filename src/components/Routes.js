import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Dash from './Dash';
import Dash_admin from './Dash_admin'
import Navbar from './Navbar';
import Product from './Product';
import Help from './Help';
import Profile from './userprofile';
import Login_admin from './Login_admin'

const Url=()=>{
    return(
        <>
        <Routes>
            {/* <Routes basename={'dash'
        }> */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path= '/' element={<Dash/>}></Route>
            <Route path= '/nav' element={<Navbar/>}></Route>
            <Route path= '/product' element={<Product/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path= '/profile' element={<Profile/>}></Route>
            <Route path= '/login_admin' element={<Login_admin/>}></Route>
            <Route path= '/admin/dashboard' element={<Dash_admin/>}></Route>
            
        </Routes>
        </>
    )
}

export default Url