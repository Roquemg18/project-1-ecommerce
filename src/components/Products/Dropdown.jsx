// Dropdown.js

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import "../../styles/Dropdown.css";

function Dropdown({ options, titulo, onChange }) {
  const initialWidth = window.innerWidth;

  const [isOpen, setIsOpen] = useState(initialWidth > 650);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 650);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    onChange(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        onClick={handleToggle}
      >
        <span>{isOpen ? "Ocultar opciones" : titulo}</span>
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      <div
        className={`${
          isOpen ? "dropdown-enter" : "dropdown-exit"
        } origin-top-right left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        {isOpen && (
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                className="flex items-center justify-between px-4 py-2 text-sm"
              >
                <span>{option}</span>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(option)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

//anda todo
