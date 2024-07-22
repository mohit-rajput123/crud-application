
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Details from './components/Details.js';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Details/>}/>
        {/* <Route path='/Home' element={<Navbar/>}/> */}

        {/* <Route path='/nav' element={<Navbar/>}/> */}

      </Routes>
    </BrowserRouter>
    
      
    </>
    
  );
}

export default App;
