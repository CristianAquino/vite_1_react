import { useState, useEffect } from "react";
import { LoginForm } from "./components/LoginForm";
import { Logout } from "./components/Logout";

const initalLogin = {
  username: "",
  password: "",
};

export const Practice = () => {
  const [login, setLogin] = useState(initalLogin);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const local = window.localStorage.getItem("loginUser");
    if (local) {
      const localUser = JSON.parse(local);
      setUser(localUser);
    }
  }, []);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.username) {
      setUser(login);
      setLogin(initalLogin);
      window.localStorage.setItem("loginUser", JSON.stringify(login));
    } else {
      setError("loegate p");
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loginUser");
    setUser(null);
    setError("");
  };

  return (
    <div>
      {user == null ? (
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          login={login}
          error={error}
        />
      ) : (
        <Logout handleLogout={handleLogout} user={user} />
      )}
    </div>
  );
};
