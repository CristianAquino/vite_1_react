import { Link } from "react-router-dom";
import "./BarNavigation.css";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import { useContext, useEffect } from "react";
import { authContext } from "../../provider/AuthProvider";

export const BarNavigation = () => {
  const { isLogged, logout } = useAuth();
  const { profile, profileUser } = useProfile();

  const { token } = useContext(authContext);

  useEffect(() => {
    if (isLogged) profileUser(token);
  }, [token]);

  return (
    <nav className="navigation">
      <div className="logo">
        <Link to={"/"}>
          <span>LOGO</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/card"}>Card</Link>
        </li>
        {isLogged && (
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        )}
      </ul>
      {isLogged ? (
        <div className="input">
          <p>Bienvenido {profile?.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="input">
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </nav>
  );
};
