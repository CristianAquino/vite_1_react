import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "./store/StoreProvider";
import { types } from "./store/storeReducer";

export const Prueba = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <nav>
        <Link to={"/"}>Home</Link> | {""}
        <Link to={"/products"}>Products</Link>
        <button onClick={() => dispatch({ type: types.refresh })}>
          Refresh
        </button>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};
