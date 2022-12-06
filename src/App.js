import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Url from './components/routes/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App(){
    return(   //asd
        <BrowserRouter>
            <Url/>
        </BrowserRouter>
  
    );
}

export default App