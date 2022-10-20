import { Link, useSearchParams } from "react-router-dom";
import { useStore } from "../store/StoreProvider";

export const Products = () => {
  const { products } = useStore();
  const [inputSearch, setInputSearch] = useSearchParams();
  const search = inputSearch.get("search") ?? "";

  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="search product"
        value={search}
        onChange={(e) => setInputSearch({ search: e.target.value })}
      />
      <ul>
        {products
          .filter((product) => {
            if (!product) return;
            const name = product.name.toLowerCase();
            return name.includes(search.toLowerCase());
          })
          .map((product) => (
            <li key={product.id}>
              <Link to={product?.id?.toString()}>{product.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
