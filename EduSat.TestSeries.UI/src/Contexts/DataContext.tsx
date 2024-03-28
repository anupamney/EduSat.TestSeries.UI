import { createContext } from "react";

interface DataContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
