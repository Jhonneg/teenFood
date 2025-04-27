import React, { useState } from "react";
import { Link } from "react-router";
import img from "/image 3.svg";
import { Outlet } from "react-router";
import Login from "./Login";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState("Logged Out");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className="h-20 w-full bg-[#1E1E1E] flex items-center
     justify-between"
      >
        <Link to="/">
          <img src={img} alt="logo" width={56} className="mx-2.5" />
        </Link>
        <div className="flex justify-between gap-24">
          <Link to="receitas" className="text-[#b3b3b3]">
            Receitas
          </Link>
          <Link to="faq" className="text-[#b3b3b3]">
            Perfil
          </Link>
          <Link to="grafico" className="text-[#b3b3b3]">
            Grafico
          </Link>
        </div>
        <div className="flex gap-5 mx-5">
          <button onClick={handleOpenModal} className="btn-normal w-28">
            Login
          </button>
        </div>
        <Login isOpen={isModalOpen} onClose={handleCloseModal} />
      </nav>
      <Outlet />
    </>
  );
}
