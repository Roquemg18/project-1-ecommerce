import { useState, useEffect } from "react";

import Products from "./components/Products/Products";
import Footer from "./components/home/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagHome from "./components/home/PagHome";
import NavBar from "./components/navbar/NavBar";
import DescriptionProduct from "./components/Products/DescriptionProduct";
import CartProvider from "./context/CartContext";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar productos={products} />
        <Routes>
          <Route path="/home" element={<PagHome />} />
          <Route
            path="/productos/"
            element={<Products palabra="Productos" />}
          />
          <Route
            path="/descriptionProduct/:productId"
            element={<DescriptionProduct />}
          />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
