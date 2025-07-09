import { createContext, useState } from "react";

// Create the context with a safe default
export const AppContext = createContext({
  user: { name: "", email: "", token: null, isLoggedIn: false },
  theme: "light",
  login: () => {},
  logout: () => {},
  setTheme: () => {},
});

// AppProvider component to wrap your app
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    token: null,
    isLoggedIn: false,
  });

  const [theme, setTheme] = useState("dark");

  const login = (userData) => {
    setUser({
      ...user,
      ...userData,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      name: "",
      email: "",
      token: null,
      isLoggedIn: false,
    });
  };

  const contextValue = {
    user,
    theme,
    setTheme,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
