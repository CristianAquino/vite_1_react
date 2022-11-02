import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./pages/Home";
import { ProfileUser } from "./components/Profile/ProfileUser";

import { ProtectedRoute } from "./routes/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import { Card } from "./components/Card/Card";

const App = () => {
  const { isLogged } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="card" element={<Card />} />
        <Route element={<ProtectedRoute isLogged={!isLogged} />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="profile"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <ProfileUser />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default App;
