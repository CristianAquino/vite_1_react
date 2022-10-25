import { useContext, useCallback, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { authSignin, authSignup } from "../https/postAuth";

const useAuth = () => {
  const { token, setToken } = useContext(authContext);
  const [state, setState] = useState({ loading: false, error: false });
  const isLogged = Boolean(token);

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      authSignin({ email, password })
        .then((token) => {
          window.localStorage.setItem("token", token);
          setState({ loading: false, error: false });
          setToken(token);
        })
        .catch((error) => {
          window.localStorage.removeItem("token", token);
          setState({ loading: false, error: true });
          console.log(error);
        });
    },
    [setToken]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("token", token);
    setToken(null);
  }, [setToken]);

  const registerUser = useCallback(
    ({ username, email, password }) => {
      setState({ loading: true, error: false });
      authSignup({ username, email, password })
        .then((token) => {
          window.localStorage.setItem("token", token);
          setState({ loading: false, error: false });
          setToken(token);
        })
        .catch((error) => {
          window.localStorage.removeItem("token", token);
          setState({ loading: false, error: true });
          console.log(error);
        });
    },
    [setToken]
  );

  return {
    isLogged,
    login,
    logout,
    registerUser,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
  };
};

export default useAuth;
