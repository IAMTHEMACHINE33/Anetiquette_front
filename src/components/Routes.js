import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Dash from './Dash';
import Navbar from './Navbar';
import Product from './Product';

const Url=()=>{
    return(
        <>
        <Routes>
            {/* <Routes basename={'dash'}> */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path= '/' element={<Dash/>}></Route>
            <Route path= '/nav' element={<Navbar/>}></Route>
            <Route path= '/product' element={<Product/>}></Route>
        </Routes>
        </>
    )
}

export default Url