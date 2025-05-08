import React from "react";
import icon from "/star-svgrepo-com.svg";

export default function Perfil() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="mx-56">
        <h1 className="text-6xl font-bold">Bem vindo</h1>
        <p className="text-center text-3xl mb-16">Nome</p>
        <div className="border-2 rounded border-gray-100">
          <p className="m-2">Bio</p>
          <textarea
            className="m-2"
            name="descrição"
            id=""
            placeholder="descrição"
          ></textarea>
        </div>
      </div>
      <div
        className="border-2 rounded border-b-2 
      border-gray-200 p-6"
      >
        <p className="font-medium border-b-gray-100 mb-4">Favoritos</p>
        <div className="mb-4 flex items-start">
          <img src={icon} height={20} width={20} alt="" className="mr-2" />
          <div className="flex flex-col">
            <p className="">Receita 1</p>
            <p className="text-xs text-gray-400">Descrição da receita</p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <img src={icon} height={20} width={20} alt="" className="mr-2" />
          <div className="flex flex-col">
            <p className="">Receita 2</p>
            <p className="text-xs text-gray-400">Descrição da receita</p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <img src={icon} height={20} width={20} alt="" className="mr-2" />
          <div className="flex flex-col">
            <p className="">Receita 3</p>
            <p className="text-xs text-gray-400">Descrição da receita</p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <img src={icon} height={20} width={20} alt="" className="mr-2" />
          <div className="flex flex-col">
            <p className="">Receita 4</p>
            <p className="text-xs text-gray-400">Descrição da receita</p>
          </div>
        </div>
        <div className="mb-4 flex items-start">
          <img src={icon} height={20} width={20} alt="" className="mr-2" />
          <div className="flex flex-col">
            <p className="">Receita 5</p>
            <p className="text-xs text-gray-400">Descrição da receita</p>
          </div>
        </div>
      </div>
    </div>
  );
}
