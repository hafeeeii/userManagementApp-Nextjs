"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [isLogged, setIsLogged] = useState(false);
  return (
    <AppContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
