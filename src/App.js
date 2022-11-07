
import { BrowserRouter } from 'react-router-dom';
import FormPage from './components/Form';

function App(){
    return(
        <>
        <BrowserRouter>
        <FormPage></FormPage>
        </BrowserRouter>
        </>
    )
}

export default App;