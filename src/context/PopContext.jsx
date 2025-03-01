import { createContext, useState, useEffect } from "react";
const PopContext = createContext();

export const PopContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePop = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen); 
  };
  const closePop = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closePop();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  
  return (
    <PopContext.Provider value={{ togglePop, isOpen, closePop }}>
      {children}
    </PopContext.Provider>
  );
};

export default PopContext;
