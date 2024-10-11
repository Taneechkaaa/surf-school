import { ReactNode, useContext, useState } from "react";
import { NavigationContext } from "./NavigationContext";

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isAbsolute, setIsAbsolute] = useState(false);

  return (
    <NavigationContext.Provider value={{ isAbsolute, setIsAbsolute }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
