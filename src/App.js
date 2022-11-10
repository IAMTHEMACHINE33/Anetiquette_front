import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Url from './components/Routes';

function App(){
    return(   
        <BrowserRouter>
            <Url/>
        </BrowserRouter>
  
    );
}

export default App