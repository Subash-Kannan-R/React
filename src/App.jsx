
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import "./index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Output from "./Usestate_Hooks/Output";
import Final from "./UseEffect/Final";
import Banner from "./Components/Banner";
import Product from "./Pages/Product";
import Valid from "./Form/Valid";
import Child from "./Props/Child";
import Parent from "./Props/Parent";
import Letterpage from "./Form/Letterpage";
import Formpage from "./Form/Formpage";

const App = () => {
    return (
        <>
           {/* <Final /> */}
           {/* <Banner/> */}
        {/* <Output /> */}
        {/* <Landing /> */}
                  <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/form" element={<Formpage/>} />
                    <Route path="/letter" element={<Letterpage/>} />
               </Routes>  
               {/* <Valid /> */}
               {/* <Child /> */}
               {/* <Parent /> */}
              
        </>
    );
}

export default App;

