import { createContext, ReactNode, useEffect } from "react";
import { auth } from "../FirebaseConfig/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({});

const GlobalState = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
        }
      });
  }, []);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
