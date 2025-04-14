import React from "react";
import hero from "/Teen.png";
import Card from "./Card";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center content-center bg-[#1E1E1E]">
        <img src={hero} alt="hero image logo" className="w-3xl h-64" />
      </div>
      <div className="p-2 w-full h-14 gap-3 flex content-center justify-start">
        <button className="btn-category">Vegana X</button>
        <button className="btn-category">Low Carb X</button>
        <button className="btn-category">Lowcal X</button>
        <button className="btn-unselected">Lowcal X</button>
      </div>
      <Card />
    </main>
  );
}
