import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Url from './components/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App(){
    return(   
        <BrowserRouter>
            <Url/>
        </BrowserRouter>
  
    );
}

export default App