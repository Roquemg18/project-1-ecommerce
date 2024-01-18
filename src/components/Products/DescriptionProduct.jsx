import React, { useState, useEffect } from "react";
import Discount_cars from "../home/Discount_cars";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const DescriptionProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { addProduct } = useCartContext();
  const [quantity, setQuatity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    console.log(`Talla seleccionada: ${size}`);

    setSelectedSize(size);
  };

  const [talleDesplegado, settalleDesplegado] = useState(false);
  const [envioDesplegado, setenvioDesplegado] = useState(false);
  const [promocionesDesplegado, setpromocionesDesplegado] = useState(false);

  const toggleDesplegar = () => {
    settalleDesplegado(!talleDesplegado);
  };
  const toggleDesplegar2 = () => {
    setenvioDesplegado(!envioDesplegado);
  };
  const toggleDesplegar3 = () => {
    setpromocionesDesplegado(!promocionesDesplegado);
  };

  const onAdd = () => {
    addProduct(product, quantity);
  };

  return (
    <div className="w-full h-full ">
      <div className="flex">
        <div className="w-2/3 items-center justify-center">
          {product && (
            <div key={product.id}>
              <img
                className="h-2/4 w-2/5 px-6 m-auto"
                src={product.image}
                alt={product.title}
              />
            </div>
          )}
        </div>

        <div className="w-1/3 ">
          {product && (
            <div key={product.id} className="flex-col w-4/6">
              <h2 className="mb-4">{product.title}</h2>
              <p className="mb-2 font-bold text-xl">{product.category}</p>
              <spam className="price-container">${product.price}</spam>

              <div className="mb-4 mt-4">
                <button
                  className={`size-button ${
                    selectedSize === "XS" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("XS")}
                >
                  XS
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "S" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("S")}
                >
                  S
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "L" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("L")}
                >
                  L
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "XL" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("XL")}
                >
                  XL
                </button>
                <button
                  className={`size-button ${
                    selectedSize === "XXL" ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection("XXL")}
                >
                  XXL
                </button>
                <style jsx>{`
                  .size-button {
                    background-color: #fff;
                    color: #000;
                    border: 1px solid #000;
                    padding: 8px;
                    margin-right: 8px;
                    cursor: pointer;
                  }

                  .size-button.selected {
                    background-color: #000;
                    color: #fff;
                  }
                `}</style>
              </div>
              <div className="containerCantidad">
                <button onClick={() => setQuatity(quantity - 1)}>-</button>
                <h3>{quantity}</h3>
                <button onClick={() => setQuatity(quantity + 1)}>+</button>
              </div>
              <button
                className="rounded-3xl bg-slate-400 px-20 py-3 mb-4 font-bold text-lg"
                onClick={onAdd}
              >
                Agregar al Carrito
              </button>
              <p>{product.description}</p>

              <div className="contenedor-desplegable">
                <div
                  className={`barra ${talleDesplegado ? "desplegado" : ""}`}
                  onClick={toggleDesplegar}
                >
                  Talle y Ajustes
                  <span
                    className={`flecha ${talleDesplegado ? "abajo" : "arriba"}`}
                  >
                    &#9660;
                  </span>
                </div>
                {talleDesplegado && (
                  <div className="contenido-adicional">
                    • La persona de la fotografía usa talla S y mide 1.73 m
                  </div>
                )}
              </div>

              <div className="contenedor-desplegable">
                <div
                  className={`barra ${envioDesplegado ? "desplegado" : ""}`}
                  onClick={toggleDesplegar2}
                >
                  Envios y devoluciones
                  <span
                    className={`flecha ${envioDesplegado ? "abajo" : "arriba"}`}
                  >
                    &#9660;
                  </span>
                </div>
                {envioDesplegado && (
                  <div className="contenido-adicional">
                    Envíos a todo el país, excepto a las provincias de Misiones
                    y Tierra del Fuego. Entregas a domicilio o podes retirar en
                    puntos seleccionados. Devolución gratuita dentro de un plazo
                    de 30 días. <button>Ver más</button>
                  </div>
                )}
              </div>

              <div className="contenedor-desplegable">
                <div
                  className={`barra ${
                    promocionesDesplegado ? "desplegado" : ""
                  }`}
                  onClick={toggleDesplegar3}
                >
                  Promociones
                  <span
                    className={`flecha ${
                      promocionesDesplegado ? "abajo" : "arriba"
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
                {promocionesDesplegado && (
                  <div className="contenido-adicional">
                    Comprá con 2 cuotas sin interés en todos los productos y
                    hasta 9 sin interés con bancos seleccionados. Aceptamos
                    Tarjetas de Crédito, Tarjetas de Débito y Mercado Pago.{" "}
                    <button>Ver mas</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Discount_cars query="?limit=3" />
    </div>
  );
};
export default DescriptionProduct;
// anda todo
