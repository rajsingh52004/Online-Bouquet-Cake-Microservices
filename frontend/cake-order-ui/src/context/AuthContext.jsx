import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("cakeBloomToken"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("cakeBloomEmail"));

  const login = (jwtToken, email) => {
    localStorage.setItem("cakeBloomToken", jwtToken);
    localStorage.setItem("cakeBloomEmail", email);
    setToken(jwtToken);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("cakeBloomToken");
    localStorage.removeItem("cakeBloomEmail");
    setToken(null);
    setUserEmail(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, userEmail, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}