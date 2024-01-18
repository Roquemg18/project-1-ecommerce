import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black h-full ">
      <div className="flex sm:mx-auto md:flex-row gap-10 justify-center pt-3 footer-responsive ">
        <div className="flex flex-column text-left">
          <h3 className="text-white ml-7">AYUDA</h3>
          <ul className="text-zinc-500 ">
            <li>Envios y entregas</li>
            <li>Devoluciones</li>
            <li>Cambios</li>
            <li>Opciones de pago</li>
          </ul>
        </div>
        <div className="flex flex-column ">
          <h3 className="text-white ml-7">ACERCA DE NOSOTROS</h3>
          <ul className="text-zinc-500">
            <li>Noticias</li>
            <li>Inversionistas</li>
            <li>Nuestra marca</li>
          </ul>
        </div>
        <div className="flex flex-column ">
          <h3 className="text-white ml-7">REDES</h3>
          <ul className="text-zinc-500 ">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row justify-between">
        <h4 className="text-white text-base  border-t-3 border-white">
          ©2023.Todos los derechos reservados
        </h4>
        <div className="flex gap-1 flex-col sm:gap-4 sm:flex-row">
          <a>Terminos y Condiciones</a>
          <a>Politicas de privacidada y cookies</a>
        </div>
      </div>
    </footer>
  );
}
