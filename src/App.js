
import { BrowserRouter } from 'react-router-dom';
import Url from './components/Routes';
import Dash from './components/Dash';

import 'bootstrap/dist/css/bootstrap.css';
function App(){
    return(
        <>
        <BrowserRouter>
        <Dash></Dash>
        <Url></Url>
        </BrowserRouter>
        </>
    )
}

export default App;