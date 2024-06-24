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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f00"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-trash-2 cursor-pointer"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6L18.4658 19.1426C18.4416 19.7218 18.2096 20.2715 17.8138 20.6876C17.418 21.1037 16.8851 21.3577 16.325 21.4L7.675 21.4C7.1149 21.3577 6.582 21.1037 6.1862 20.6876C5.7904 20.2715 5.55841 19.7218 5.53422 19.1426L5 6H19Z"></path>
          <path d="M10 11L10 17"></path>
          <path d="M14 11L14 17"></path>
          <path d="M19 6L18.4658 19.1426C18.4416 19.7218 18.2096 20.2715 17.8138 20.6876C17.418 21.1037 16.8851 21.3577 16.325 21.4L7.675 21.4C7.1149 21.3577 6.582 21.1037 6.1862 20.6876C5.7904 20.2715 5.55841 19.7218 5.53422 19.1426L5 6H19Z"></path>
          <path d="M9 6V4.5C9 3.948 9.448 3.5 10 3.5H14C14.552 3.5 15 3.948 15 4.5V6H9Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-edit-2 cursor-pointer"
        >
          <path d="M17 2L22 7L7 22L2 22L2 17L17 2Z"></path>
          <path d="M7 22L2 22L2 17"></path>
        </svg>
      </div>
    </div>
  );
};
