import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='login' element={<Login/>}/>
    <Route exact path='signup' element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
