import React, { useState } from "react";
import Dropdown from "./Dropdown";
import RenderProducts from "./RenderProducts";
import { useParams } from "react-router-dom";

export default function Products() {
  const [categoryName, setCategoryName] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    discount: null,
    category: null,
    color: null,
  });

  const options = ["10%", "20%", "30%"];
  const colors = [
    "Violeta",
    "Azul",
    "Blanco",
    "Negro",
  ];
  const categories = ["Remereas", "Camperas", "Accesorios", "Mochila"];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "category") {
      // Mapea la categoría seleccionada a la URL deseada
      const categoryMappings = {
        "Accesorios": "/category/jewelery",
      };

      setCategoryName(categoryMappings[value] || "");
    }

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <section className="w-full h-full p-5 flex flex-col sm:flex-row">
      <div className="bg-white h-full w-80">
        <form className="h-full">
          <div className="flex gap-5">
            <h5 className="m-3">Filtros</h5>
            <button
              className="hover:bg-gray-200 shadow-xl w-26 px-2 rounded-xl h-12 mt-1"
              onClick={() =>
                setSelectedFilters({
                  discount: null,
                  category: null,
                  color: null,
                })
              }
            >
              Limpiar filtros
            </button>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <Dropdown
              titulo={"Descuentos"}
              options={options}
              onChange={(value) => handleFilterChange("discount", value)}
            />
            <Dropdown
              titulo={"Categorias"}
              options={categories}
              onChange={(value) => handleFilterChange("category", value)}
            />
            <Dropdown
              titulo={"Colores"}
              options={colors}
              onChange={(value) => handleFilterChange("color", value)}
            />
          </div>
        </form>
      </div>
      <div className="bg-white w-full h-full">
        {/* Pasa la opción de descuento seleccionada como parámetro */}
        <RenderProducts
          query={`${categoryName}`}
          discountThreshold={selectedFilters.discount || selectedFilters.category || selectedFilters.color}
        />
      </div>
    </section>
  );
}
