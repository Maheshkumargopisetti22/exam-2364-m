import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Loginform from "./components/loginform"
import Registeration from "./components/registeration"
function App() {
  return (

    <Router>
    <div className="App">
     <ul style={{display:"flex",width:"60%",gap:"2rem"}}>
       <li style={{listStyle:"none",background:"black",width:"10rem",height:"5vh"}}>
         <Link to="/loginform">login</Link>
       </li>
       <li style={{listStyle:"none",background:"black",width:"10rem",height:"5vh"}}>
         <Link to="/regiteration">registeration</Link>
       </li>
     </ul>
    <Routes>
          <Route exact path='/' element={< Loginform />}></Route>
          <Route exact path='/regiteration' element={< Registeration />}></Route>
   </Routes>
   </div>
</Router>

  );
}

export default App;
