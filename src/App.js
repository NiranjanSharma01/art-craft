import { BrowserRouter, Route, Routes } from "react-router-dom";
import NS from "./ns";
import About from "./page/naves/about";
import Naves from "./page/naves";
import { useState } from 'react';
import Login from "./page/auth/signup";
import Man from "./page/naves/man";
import Women from "./page/naves/women";
import { Keyholder } from "./productCategory/keyholder";
import { Wallclock } from "./productCategory/Wallclock";


function App() {
  const[estate,setEstate]=useState("Dark")
  const[eate,setEate]=useState(1)

  return (
    <div style={{}}>
      <BrowserRouter>
      { eate === 1 && (
      <Naves estate={estate} setEstate={setEstate} />
      )}
        <Routes>
          <Route path="/" element={<NS />} />
          <Route path="/about" element={<About/>} />
          <Route path="/man" element={<Man/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/login" element={<Login setEate={setEate} />} /> 
          <Route path="/Keyholder" element={<Keyholder/>} /> 
          <Route path="/Wallclock" element={<Wallclock/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
