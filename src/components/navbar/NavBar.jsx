import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "./Cart";
import Links from "./Links";
import { useEffect, useRef, useState } from "react";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";

export default function NavBar({ productos }) {
  const [cartOn, setCartOn] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const inputRef = useRef(null);

  const [desplegarLinks, setDesplegarLinks] = useState(false);
  const handleLinks = () => {
    setDesplegarLinks(!desplegarLinks);
    console.log(desplegarLinks);
  };

  const handleCartClick = () => {
    setCartOn(!cartOn);
    setSearchVisible(false);
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
    setCartOn(false);

    if (searchVisible) {
      inputRef.current.focus();
    }
  };

  const handleBusqueda = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);

    const resultados = productos.filter((producto) =>
      producto.title.toLowerCase().includes(valorBusqueda.toLowerCase())
    );

    setResultadoBusqueda(resultados);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <>
      <div className="min-h-full">
        {/*parte arriba */}
        <div className="sm:hidden md:hidden lg:flex xl:flex responsive-navbar items-center bg-white h-10  pl-6 ">
          <img
            className="h-7 w-7"
            src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/f97c1ee4-0e66-4225-b378-f4ae7d491bc7___39627060035c5a0d813f57675cef86ea.svg"
          />
          <div className="ml-auto ">
            <button className=" text-xs box-border px-2 py-2 font-bold">
              buscar tienda
            </button>

            <Dropdowns />
          </div>
        </div>

        {/*parte medio: logo,links,buscador,carrito  */}

        <div className="relative flex items-center justify-between center-navbar-responsive bg-gray-100 h-16 pb-3">
          <div className="sm:flex md:flex lg:hidden xl:hidden">
            <button onClick={handleLinks}>
              <Bars3Icon className="h-8 text-gray-500 ml-2 mt-2 "></Bars3Icon>
            </button>
            {desplegarLinks && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
                <div className="flex flex-col w-64 bg-white h-full ">
                  <div className="flex gap-x-48">
                    <img
                      className="h-7 w-7"
                      src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/f97c1ee4-0e66-4225-b378-f4ae7d491bc7___39627060035c5a0d813f57675cef86ea.svg"
                    />
                    <button onClick={handleLinks}>
                      <XMarkIcon className="h-8  text-gray-500"></XMarkIcon>
                    </button>
                  </div>

                  <Links className="flex flex-col w-64 " />
                </div>
              </div>
            )}
          </div>

          <Link to={"/home"} className="mx-auto">
            <img
              className="w-16 h-6 mt-2 ml-16"
              src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
              alt="Logo"
            />
          </Link>

          <div className="hidden sm:hidden md:hidden lg:flex lg:mx-44 xl:flex xl:mx-96 responsive-navbar">
            <Links />
          </div>

          <div className="flex items-center mr-4">
            <button
              onClick={handleSearchClick}
              className="w-8 p-1 rounded-full mt-3 border-black h-8 bg-white"
            >
              <MagnifyingGlassIcon className="h-6 text-gray-500" />
            </button>
            <button onClick={handleCartClick} className="ml-4">
              <ShoppingCartIcon className="h-8 w-8 mt-2"></ShoppingCartIcon>
            </button>
            <Cart cartOn={cartOn} />
          </div>
        </div>

        {/*parate abajo*/}
        <div className="bg-gray-100">
          {searchVisible && (
            <div className="flex justify-center items-center flex-col">
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={handleBusqueda}
                className="w-96 rounded-xl pl-4 bg-slate-200 h-10"
              />
              {busqueda && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {resultadoBusqueda.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col gap-2 items-center w-full h-full max-h-80 max-w-auto border-gray-300 shadow-lg my-5 p-3"
                    >
                      <img className="h-40 w-40 px-2 " src={product.image} />
                      <div>
                        <h2 className="h-10 text-lg">
                          {truncateTitle(product.title, 28)}
                        </h2>
                        <div className="flex gap-4 mt-4">
                          <p className="font-bold">Price: ${product.price}</p>
                          <Link to={`/descriptionProduct/${product.id}`}>
                            <button
                              onClick={handleClickOutside}
                              className="p-2 bg-cyan-600 text-white rounded-md "
                            >
                              Comprar
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
