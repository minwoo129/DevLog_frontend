import React, { createContext, useState } from "react";
import { MenuContextType } from "./types";
import { ProviderType } from "../types";

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  setOpen: () => {},
});

export const MenuContextProvider: ProviderType = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
