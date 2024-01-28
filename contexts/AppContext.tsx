"use client";

import { createContext, useContext, useState } from "react";

type AppContextProps = {};

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  return useContext(AppContext);
};
