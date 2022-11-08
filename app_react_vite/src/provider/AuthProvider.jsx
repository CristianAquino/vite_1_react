import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(() =>
    window.localStorage.getItem("token")
  );

  return (
    <authContext.Provider value={{ profile, token, setToken, setProfile }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
