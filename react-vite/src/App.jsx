import "./App.css";
import { Practice } from "./Practice";
import { Prueba } from "./Prueba";
import { Home } from "./routes/Home";
import { Products } from "./routes/Products";
import { Product } from "./routes/Product";

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Prueba />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default App;
