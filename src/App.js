import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Url from './components/routes/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App(){
    return(    
    <React.StrictMode>
        <BrowserRouter>
            <Url/>
        </BrowserRouter>
        </React.StrictMode>
    );
}

export default App