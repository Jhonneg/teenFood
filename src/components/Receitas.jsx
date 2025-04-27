import React from "react";
import Card from "./Card";

export default function Receitas() {
  return (
    <div className="h-screen">
      <div className="p-10">
        <h1 className="bold">Escolha sua dieta</h1>
        <Card />
      </div>
    </div>
  );
}
