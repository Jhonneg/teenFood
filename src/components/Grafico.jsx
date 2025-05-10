import React from "react";
import blue from "/Ellipse1.svg";
import green from "/green.svg";
import yellow from "/yew.svg";
import red from "/red.svg";

export default function Grafico() {
  const chartSegments = [
    {
      name: "Carboidrato",
      percent: 35,
      colorClass: "bg-blue-600",
      hexColor: "#2563EB",
      textColor: "text-white",
      labelOnChart: "35%",
      position: ["top-[30%]", "left-[30%]"],
    },
    {
      name: "Proteína",
      percent: 20,
      colorClass: "bg-green-500",
      hexColor: "#22C55E",
      textColor: "text-black",
      labelOnChart: "20%",
      position: ["top-[70%]", "left-[35%]"],
    },
    {
      name: "Gordura Trans",
      percent: 30,
      colorClass: "bg-yellow-400",
      hexColor: "#FACC15",
      textColor: "text-black",
      labelOnChart: "30%",
      position: ["top-[75%]", "left-[70%]"],
    },
    {
      name: "Fibras",
      percent: 15,
      colorClass: "bg-red-500",
      hexColor: "#EF4444",
      textColor: "text-white",
      labelOnChart: "15%",
      position: ["top-[40%]", "left-[75%]"],
    },
  ];

  let cumulativePercent = 0;

  const gradientStops = chartSegments
    .map((segment) => {
      const startPercent = cumulativePercent;
      cumulativePercent += segment.percent;
      const endPercent = cumulativePercent;
      return `${segment.hexColor} ${startPercent}% ${endPercent}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-8 p-4 md:p-8 bg-white">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-auto order-2 md:order-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 border-b pb-2">
          Alimentação do dia
        </h2>
        <ul className="space-y-2.5 mt-3">
          {chartSegments.map((item, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`inline-block w-4 h-4 rounded-full mr-3 ${item.colorClass}`}
                aria-hidden="true"
              ></span>
              <span className="text-sm text-gray-700">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 md:order-2">
        <div
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full"
          style={{
            background: `conic-gradient(from -90deg, ${gradientStops})`,
          }}
          role="img"
          aria-label={`Pie chart showing daily food intake: ${chartSegments
            .map((s) => `${s.name} ${s.percent}%`)
            .join(", ")}`}
        >
          {chartSegments.map((segment, index) => (
            <div
              key={`label-${index}`}
              className={`absolute ${segment.textColor} font-bold text-xs md:text-sm transform -translate-x-1/2 -translate-y-1/2 ${segment.position[0]} ${segment.position[1]}`}
            >
              {segment.labelOnChart}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
