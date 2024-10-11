import { createContext } from "react";

export const NavigationContext = createContext<{
  isAbsolute: boolean;
  setIsAbsolute: (value: boolean) => void;
}>({ isAbsolute: false, setIsAbsolute: () => {} });
