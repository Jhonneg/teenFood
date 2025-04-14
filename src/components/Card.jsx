import React from "react";
import placeholder from "/placeholder.png";

export default function Card() {
  return (
    <div
      className="flex justify-evenly 
  items-center w-full h-screen gap-2"
    >
      <div className="p-2 border-1 border-gray-300 rounded-md h-72 w-64">
        <img src={placeholder} alt="placeholder image" />
        <p>Nome da receita 1</p>
        <p className="text-gray-600">Receita vegana, baixa caloria, etc.</p>
      </div>
      <div className="p-2 border-1 border-gray-300 rounded-md h-72 w-64">
        <img src={placeholder} alt="placeholder image" />
        <p>Nome da receita 1</p>
        <p className="text-gray-600">Receita vegana, baixa caloria, etc.</p>
      </div>
      <div className="p-2 border-1 border-gray-300 rounded-md h-72 w-64">
        <img src={placeholder} alt="placeholder image" />
        <p>Nome da receita 1</p>
        <p className="text-gray-600">Receita vegana, baixa caloria, etc.</p>
      </div>
    </div>
  );
}
