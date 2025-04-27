import React from "react";
import Card from "./Card";
import ketoImg from "/download 1.png";
import veganaImg from "/pan-de-pita-con-falafel 1.png";
import lowCarbImg from "/OIP 1.png";
import glutenImg from "/OIP 2.png";
import mediImg from "/OIP 3.png";
import caloriaImg from "/OIP 4.png";

export default function Receitas() {
  return (
    <div className="h-full">
      <div className="p-10">
        <h1 className="bold text-2xl">Escolha sua dieta</h1>
        <div className="p-10 flex justify-between flex-wrap gap-6">
          <Card img={ketoImg} nomeReceita={"Keto"} />
          <Card img={veganaImg} nomeReceita={"Vegana"} />
          <Card img={lowCarbImg} nomeReceita={"Low carb"} />
          <Card img={glutenImg} nomeReceita={"Sem gluten"} />
          <Card img={mediImg} nomeReceita={"Mediterrânia"} />
          <Card img={caloriaImg} nomeReceita={"Baixa Caloria"} />
        </div>
      </div>
    </div>
  );
}
