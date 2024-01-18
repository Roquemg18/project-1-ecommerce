import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderProducts({ query, discountThreshold }) {
  console.log("lo que llega:", discountThreshold);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${query}`)
      .then((res) => res.json())
      .then((json) => {
        // Filtrar productos excluyendo los de categoría "electronics"
        const nonElectronicsProducts = json.filter(
          (product) => product.category !== "electronics"
        );

        // Filtrar productos según el umbral de descuento
        const filteredProducts = filterProductsByDiscount(
          nonElectronicsProducts,
          discountThreshold
        );

        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [query, discountThreshold]);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <>
      <section className="p-6 sm:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 items-center w-56 sm:w-full h-full  border-gray-300 shadow-lg  p-3"
            >
              <img
                className="h-40 w-40 px-2 "
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col mx-2">
                <h2 className="h-6 sm:h-10 text-base font-bold  sm:text-lg">
                  {truncateTitle(product.title, 28)}
                </h2>
                <div className="flex flex-col sm:flex-row  gap-4 mt-4">
                  <p className="mt-2 sm:mt-0 font-bold">Price: ${product.price}</p>
                  <Link to={`/descriptionProduct/${product.id}`}>
                    <button className="p-2 bg-cyan-600 text-white rounded-md ">
                      Comprar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Función auxiliar para filtrar productos según el umbral de descuento
function filterProductsByDiscount(products, discountThreshold) {
  if (!discountThreshold) {
    return products; // Si no se proporciona un umbral de descuento, devolver todos los productos
  }

  switch (discountThreshold) {
    case "30%":
      const discountedProducts30 = products.filter(
        (product) => product.id === 1
      );
      return discountedProducts30;

    case "20%":
      const discountedProducts20 = products.filter(
        (product) => product.id === 2
      );
      return discountedProducts20;

    case "10%":
      const discountedProducts10 = products.filter(
        (product) => product.id === 4 || product.id === 6
      );
      return discountedProducts10;
    case "Camperas":
      const camperasIds = [3, 14, 15, 16, 17];
      const camperas = products.filter((product) =>
        camperasIds.includes(product.id)
      );
      return camperas;

    case "Azul":
      const azulIds = [1, 4, 14, 17];
      const azul = products.filter((product) => azulIds.includes(product.id));
      return azul;

    case "Violeta":
      const violeta = products.filter((product) => product.id === 15);
      return violeta;

    case "Blanco":
      const blancoIds = [2, 18, 2];
      const blanco = products.filter((product) =>
        blancoIds.includes(product.id)
      );
      return blanco;

    case "Negro":
      const negro = products.filter((product) => product.id === 16);
      return negro;

    default:
      return products; // En caso de que el umbral de descuento no sea válido, devolver todos los productos
  }
}
