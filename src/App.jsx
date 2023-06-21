import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Thrift from "./pages/Work/Thrift";
import { NavBarContextProvider } from "./contexts/NavBarContext";
import Navbar from "./components/Navbar";
import SmallWeb from "./pages/Work/SmallWeb";
import Sindhol from "./pages/Work/Sindhol";
import BrowserProject from "./pages/Work/BrowserProject";
import Info from "./pages/Info";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <NavBarContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="thrift" element={<Thrift />} />
          <Route path="small-web" element={<SmallWeb />} />
          <Route path="sindhol" element={<Sindhol />} />
          <Route path="browser-project" element={<BrowserProject />} />
        </Routes>
      </NavBarContextProvider>
    </div>
  );
};

export default App;
