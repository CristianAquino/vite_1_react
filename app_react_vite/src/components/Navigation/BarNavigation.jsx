import { Link } from "react-router-dom";
import "./BarNavigation.css";
import useAuth from "../../hooks/useAuth";

export const BarNavigation = () => {
  const { isLogged, logout } = useAuth();
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
        {isLogged && (
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        )}
      </ul>
      {isLogged ? (
        <div className="input">
          <p>Bienvenido</p>
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
