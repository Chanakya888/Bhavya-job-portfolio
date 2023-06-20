import React, { createContext, useState } from "react";

export const NavbarContext = createContext();
export const NavBarContextProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <NavbarContext.Provider value={{ toggleNav, setToggleNav }}>
      {children}
    </NavbarContext.Provider>
  );
};
