//import logo from './logo.svg';
import "./App.css";
import Home from "./component/Home";
/* import About from './component/About';
import Contact from './component/Contact'; */
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
