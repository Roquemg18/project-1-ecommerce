import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Discount_cars({ query }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${query}`)
      .then((res) => res.json())
      .then((json) => {
        // Filtrar productos excluyendo los de categoría "electronics"
        const nonElectronicsProducts = json.filter(
          (product) => product.category !== "electronics"
        );
        setProducts(nonElectronicsProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [query]);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <>
      <section className="p-16 sm:p-20">
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
