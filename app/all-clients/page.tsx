"use client";

import { BackButton } from "@/components/BackButton";
import { ClientCard } from "@/components/ClientCard";
import { api } from "@/config/axios";
import { useEffect, useState } from "react";
import { useTrail, config } from "react-spring";

interface Client {
  id: number;
  name: string;
  cpf: string;
  birthday: string;
}

const CLIENTS_PER_PAGE = 4;

const AllClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getAllClients = async () => {
      try {
        const { data } = await api.get(`/clients?page=${currentPage}`);
        setClients(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllClients();
  }, [currentPage]);

  const trail = useTrail(clients.length, {
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
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Clientes Registrados no Banco de Dados
      </h1>
      {trail.map((props, index) => (
        <ClientCard clientData={clients[index]} key={index} />
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
          disabled={clients.length < CLIENTS_PER_PAGE}
          className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none"
        >
          Próxima
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default AllClients;
