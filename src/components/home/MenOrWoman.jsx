import React from "react";
import { Link } from "react-router-dom";

function MenOrWoman() {
  return (
    <section className="gap-10 h-screen mb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-12/12 ml-8 md:ml-16">
      <div className="h-full w-11/12 rounded-md bg-gray-200 pb-4 ">
        <img
          className="w-full h-4/5"
          src="https://felipeserani.com/wp-content/uploads/2021/08/funciona-tejido-ropa-deporte-mejor-para-ti-617x400.jpg"
        ></img>
        <h2 className="">Hombre</h2>
        <Link
          to="/productos"
          className="rounded-2xl bg-black text-white py-2 px-4 no-underline"
        >
          comprar
        </Link>
      </div>
      <div className="h-full w-11/12 rounded-md bg-gray-200  pb-2">
        <img
          className="w-full h-4/5"
          src="https://i.pinimg.com/564x/08/0e/6f/080e6f6750010eb1474328f0dd030546.jpg"
        ></img>
        <h2 className="">Mujer</h2>
        <Link
          to="/productos"
          className="rounded-2xl py-2 px-4 bg-black text-white no-underline"
        >
          comprar
        </Link>
      </div>
    </section>
  );
}

export default MenOrWoman;
