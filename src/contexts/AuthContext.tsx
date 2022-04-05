import firebase from "firebase";
import React, { createContext, useEffect, useState } from "react";
import firebaseConfig from "../firebase/firebase.config";

type User = firebase.User | null;
type ContextState = { user: User };

const AuthContext = createContext<ContextState | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = firebaseConfig.auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
