import { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState("");

  useEffect(() => {
    setGlobalTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", globalTheme);
  }, [globalTheme]);

  return (
    <GlobalContext.Provider
      value={{
        globalTheme,
        setGlobalTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
