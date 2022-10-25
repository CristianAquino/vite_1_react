import { Outlet } from "react-router-dom";
import { BarNavigation } from "../components/Navigation/BarNavigation";

export const Layout = () => {
  return (
    <>
      <BarNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
