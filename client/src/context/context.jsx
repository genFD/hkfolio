import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);
  const showMenu = () => {
    setMenu(true);
  };
  const changeLogo = () => {
    setLogo(true);
  };
  const changeLogoV = () => {
    setLogo(false);
  };
  const hideMenu = () => {
    setMenu(false);
  };
  const SidebarFixer = () => {
    if (window.innerWidth >= 768) {
      hideMenu();
      changeLogo();
    }
  };
  const changeLogoVFixer = () => {
    if (window.innerWidth <= 768) {
      changeLogoV();
    } else {
      changeLogo();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      SidebarFixer();
      changeLogoVFixer();
    });
    return () =>
      window.removeEventListener("resize", () => {
        SidebarFixer();
        changeLogoVFixer();
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
