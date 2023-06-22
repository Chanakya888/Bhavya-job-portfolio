import React, { createContext, useState } from "react";

const HoverContext = createContext();

const HoverContextProvider = ({ children }) => {
  const [hoverStates, setHoverStates] = useState({
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
  });

  const handleHover = (hoverKey) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [hoverKey]: true,
    }));
  };

  const handleLeave = (hoverKey) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [hoverKey]: false,
    }));
  };
  return (
    <HoverContext.Provider
      value={{
        hoverStates,
        handleHover,
        handleLeave,
      }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext, HoverContextProvider };
