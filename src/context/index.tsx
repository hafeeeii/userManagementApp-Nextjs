"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [isLogged, setIsLogged] = useState(false);
  let router = useRouter();
  let pathname = usePathname();
  // useEffect(() => {
  //   if (isLogged === false && pathname !== "/login") {
  //     router.push("/login");
  //   }
  // }, [isLogged, pathname]);
  return (
    <AppContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
