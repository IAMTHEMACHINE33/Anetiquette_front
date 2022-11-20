import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Dash from './Dash';
import Navbar from './Navbar';
import Product from './Product';
import Profile from './userprofile';

const Url=()=>{
    return(
        <>
        <Routes>
            {/* <Routes basename={'dash'}> */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path= '/' element={<Dash/>}></Route>
            <Route path= '/nav' element={<Navbar/>}></Route>
            <Route path= '/product' element={<Product/>}></Route>
            <Route path= '/profile' element={<Profile/>}></Route>

        </Routes>
        </>
    )
}

export default Url