import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() =>
    window.localStorage.getItem("token")
  );

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
