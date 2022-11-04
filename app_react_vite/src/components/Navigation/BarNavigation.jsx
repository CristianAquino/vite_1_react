import { Link } from "react-router-dom";
import "./BarNavigation.css";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import { useContext, useEffect } from "react";
import { authContext } from "../../provider/AuthProvider";
import { FaBars, FaRegUserCircle } from "react-icons/fa";

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
      <ul className="nav_list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        {isLogged && (
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        )}
      </ul>
      <div className="button_user">
        {isLogged ? (
          <>
            <p>Bienvenido {profile?.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <FaRegUserCircle />
            Acceder
          </Link>
        )}
      </div>
      <FaBars className="menu" />
    </nav>
  );
};
