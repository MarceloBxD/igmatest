import { SpeciesProps } from "@/app/all-species/page";
import React from "react";

type CardProps = {
  data: SpeciesProps | any;
};

export const Card = ({ data }: CardProps) => {
  return (
    <div
      className="mt-4 max-w-[50%] mx-auto w-full p-4 border border-gray-300 rounded-md bg-gray-900 shadow-md"
      data-testid="clientcard-testid"
    >
      <p className="text-white text-lg text-center">{data.nome ?? ""}</p>
      <p className="text-gray-400 text-center font-semibold">ID: {data.id}</p>
      <p className="text-gray-400 text-center">{data.nomeCientifico ?? ""}</p>
      <p className="text-gray-400 text-center">{data.nomeComum ?? ""}</p>
      <p className="text-gray-400 text-center">{data.valor ?? ""}</p>
      <div className="flex w-full justify-between mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};
