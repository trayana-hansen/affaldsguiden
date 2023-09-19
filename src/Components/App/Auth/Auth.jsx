import { createContext, useContext, useEffect, useState } from "react";

// New context, auth
const AuthContext = createContext();

// Context providers with props.children
const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState("");

  // If there is a session storage login data, set
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")));
    }
  }, [children]);

  // Returns provider and gives access to all children
  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define as custom hook to use in other files
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
