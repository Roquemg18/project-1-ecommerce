// src/components/ColorPicker.js

import React, { useState } from "react";

const ColorDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const colors = [
    "Rojo",
    "Verde",
    "Azul",
    "Amarillo",
    "Naranja",
    "Rosado",
    "Morado",
    "Turquesa",
    "Gris",
    "Negro",
  ];

  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (color) => {
    // Implementa la lógica para manejar el cambio de estado del checkbox aquí
    console.log(`Color seleccionado: ${color}`);
  };

  // Evitar que el menú se cierre al hacer clic dentro de él
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="relative inline-block" onClick={handleMenuClick}>
      <button
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
        onClick={handleToggleDropdown}
      >
        Seleccionar colores
        <svg
          className={`ml-2 w-4 h-4 transition-transform transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 right-0 z-10 w-64 p-4 bg-white border border-gray-300 rounded-md shadow-md">
          {colors.map((color) => (
            <div key={color} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={color}
                className="mr-2"
                onChange={() => handleCheckboxChange(color)}
              />
              <div
                className={`w-6 h-6 bg-${color.toLowerCase()} rounded-full mr-2`}
              ></div>
              <label htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorDropdown;
