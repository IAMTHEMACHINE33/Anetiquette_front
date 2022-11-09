import {Routes, Route} from 'react-router-dom';
import FormPage from './Form';
import Dash from './Dash';
import Navbar from './Navbar'

const Url=()=>{
    return(
        <>
            <Routes>
            <Route path='/formpage' element={<FormPage/>}></Route>
            <Route path= '/dash' element={<Dash/>}></Route>
            <Route path= '/nav' element={<Navbar/>}></Route>
            </Routes>
        </>
    )
}

export default Url;