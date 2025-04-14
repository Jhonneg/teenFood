import React from "react";
import { Outlet } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className=" w-full h-64 flex-col border-t-2 border-t-gray-300">
        <div className="m-6">
          <p className="font-medium my-6">Recursos</p>
          <p className="">Boas Práticas</p>
          <p className="">Atendimento ao consumidor</p>
          <p>Termos e condições</p>
          <p>Politica de privacidade</p>
          <p>Suporte</p>
          <p>Feedback</p>
        </div>
      </footer>
    </>
  );
}
