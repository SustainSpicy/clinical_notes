import { createContext, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";

const appTextContext = createContext();
function SymptomProvider({ children }) {
  return <appTextContext.Provider value={{}} />;
}

export const useAppText = () => {
  return useContext(appTextContext);
};
