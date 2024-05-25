import React from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import Thrift from "./pages/Work/Thrift";
import { NavBarContextProvider } from "./contexts/NavBarContext";
import Navbar from "./components/Navbar";
import SmallWeb from "./pages/Work/SmallWeb";
import Sindhol from "./pages/Work/Sindhol";
import BrowserProject from "./pages/Work/BrowserProject";
import Info from "./pages/Info";
import Archive from "./pages/Archive";
import { HoverContextProvider } from "./contexts/HoverContext";
import RestoreScroll from "./components/RestoreScroll";
import Pincode from "./pages/Work/Pincode";

const App = () => {
  return (
    <div className="h-full w-screen bg-backgroundGray">
      <RestoreScroll />
      <NavBarContextProvider>
        <HoverContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/thrift" element={<Thrift />} />
            <Route path="/small-web" element={<SmallWeb />} />
            <Route path="/sindhol" element={<Sindhol />} />
            <Route path="/browser-project" element={<BrowserProject />} />
            <Route path="/pincode" element={<Pincode />} />
          </Routes>
        </HoverContextProvider>
      </NavBarContextProvider>
    </div>
  );
};

export default App;
