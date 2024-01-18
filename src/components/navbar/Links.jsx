import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <div className="relative d-inline-block  w-full h-10  ">
      <div className="flex items-center justify-center links-responsive sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <NavLink
          className="p-2 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Destacados
        </NavLink>
        <NavLink
          className="p-3 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Hombre
        </NavLink>
        <NavLink
          className="p-3 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Mujer
        </NavLink>
        <NavLink
          className="p-3 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Niño/a
        </NavLink>
        <NavLink
          className="p-3 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Accesorios
        </NavLink>
        <NavLink
          className="p-3 cursor-pointer no-underline text-black hover:border-b-4 border-black"
          to="/productos"
        >
          Sale
        </NavLink>
      </div>
    </div>
  );
}
