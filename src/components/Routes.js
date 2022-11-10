import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Dash from './Dash';
import Navbar from './Navbar'

const Url=()=>{
    return(
        <>
        <Routes>
            {/* <Routes basename={'dash'}> */}
            <Route path='/login' element={<Login/>}></Route>
            <Route path= '/dash' element={<Dash/>}></Route>
            <Route path= '/nav' element={<Navbar/>}></Route>
        </Routes>
        </>
    )
}

export default Url