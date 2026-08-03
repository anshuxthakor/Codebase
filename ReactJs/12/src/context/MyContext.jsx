import { createContext } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  return (
    <MyStore.Provider value={{span1: "C", h1: "omponent", span2: "4"}}>
      {children}
    </MyStore.Provider>
  );
}