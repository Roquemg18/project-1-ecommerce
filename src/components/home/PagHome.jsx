import React from "react";
import Discount_cars from "./Discount_cars";
import Carousels from "./Carousels";
import MenOrWoman from "./MenOrWoman";

export default function PagHome() {
  return (
    <section className="w-full inline-block h-full px-2">
      <Carousels className="mt-8" />
      <h2 className="text-center mt-8">Productos con descuento</h2>
      <Discount_cars query="?limit=3" />
      <MenOrWoman />
      <Discount_cars query="?limit=9" /> *
    </section>
  );
}
