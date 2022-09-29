import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);

  const showMenu = () => {
    setMenu(true);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  const SidebarFixer = () => {
    if (window.innerWidth >= 768) {
      hideMenu();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      SidebarFixer();
    });
    return () =>
      window.removeEventListener("resize", () => {
        SidebarFixer();
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        menu,
        showMenu,
        hideMenu,
        logo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
