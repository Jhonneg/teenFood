import React from "react";
import { Link } from "react-router";
import img from "/image 3.svg";

export default function Navbar() {
  return (
    <nav
      className="h-20 w-full bg-[#1E1E1E] flex items-center
     justify-between"
    >
      <img src={img} alt="logo" width={56} className="mx-2.5" />
      <div className="flex justify-between gap-24">
        <Link to="receitas" className="text-[#b3b3b3]">
          Receitas
        </Link>
        <Link to="preparo" className="text-[#b3b3b3]">
          Preparo
        </Link>
        <Link to="faq" className="text-[#b3b3b3]">
          Faq
        </Link>
        <Link to="grafico" className="text-[#b3b3b3]">
          Grafico
        </Link>
      </div>
      <div className="flex gap-5 mx-5">
        <button className="btn-normal">Logar</button>
        <button className="btn-danger">Registrar</button>
      </div>
    </nav>
  );
}
