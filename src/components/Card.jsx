import React from "react";

export default function Card({ img, nomeReceita, descrição }) {
  return (
    <div className="p-2 border-1 border-gray-300 rounded-md h-72 w-64">
      <img src={img} alt="placeholder image" />
      <p>{nomeReceita}</p>
      <p className="text-gray-600">{descrição}</p>
    </div>
  );
}
