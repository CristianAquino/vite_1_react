import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/storeReducer";

export const Product = () => {
  const { products } = useStore();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((product) => product.id == id);

  const hanldeDelete = () => {
    dispatch({ type: types.deleteProduct, payload: id });
    navigate("/products", { replace: true });
  };

  return (
    <>
      <h1>{product.name}</h1>
      <button onClick={hanldeDelete}>Delete</button>
    </>
  );
};
