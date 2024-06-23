"use client";

import { BackButton } from "@/components/BackButton";
import { Card } from "@/components/Card";
import { api } from "@/config/axios";
import { useEffect, useState } from "react";
import { useTrail, config } from "react-spring";

export interface SpeciesProps {
  id: number;
  nomeComum: string;
  nomeCientifico: string;
  valor: number;
  classeTaxonomicaId: number;
}

const CLIENTS_PER_PAGE = 4;

const AllSpecies = () => {
  const [species, setSpecies] = useState<SpeciesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getAllSpecies = async () => {
      try {
        const { data } = await api.get(`/species?page=${currentPage}`);
        setSpecies(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllSpecies();
  }, [currentPage]);

  const trail = useTrail(species.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: config.stiff,
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Dados Registrados no Banco de Dados
      </h1>
      {species.map((props, index) => (
        <Card data={species[index]} key={index} />
      ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={species.length < CLIENTS_PER_PAGE}
          className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none"
        >
          Próxima
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default AllSpecies;
