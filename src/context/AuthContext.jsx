import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ti_user")) || null; }
    catch { return null; }
  });

  const login = (email, name = "Guest User") => {
    const next = { name, email };
    setUser(next);
    localStorage.setItem("ti_user", JSON.stringify(next));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ti_user");
  };

  const value = useMemo(() => ({
    user,
    isLoggedIn: Boolean(user),
    login,
    logout
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
