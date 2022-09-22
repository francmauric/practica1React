//import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
/* import About from './component/About';
import Contact from './component/Contact'; */
import {BrowserRouter, Link, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       
         <Home />
         <Route path="/" component={Home} /> 
       
    </BrowserRouter>
  );
}

export default App;
