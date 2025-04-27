import React from "react";

export default function Card({ img, nomeReceita, descrição }) {
  return (
    <div className="p-5 border-1 border-gray-300 rounded-md w-96">
      <img className="my-6" src={img} width={380} alt="placeholder image" />
      <p className="font-medium text-xl">{nomeReceita}</p>
      <p className="text-gray-600">{descrição}</p>
    </div>
  );
}
