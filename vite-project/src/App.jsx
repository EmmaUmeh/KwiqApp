import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <div className="">
        <Navbar />
        
        <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
      </Routes>
      </div>
    </div>
  
  )
}

export default App
