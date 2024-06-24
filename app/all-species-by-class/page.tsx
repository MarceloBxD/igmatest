"use client";

import { useEffect, useState } from "react";
import { api } from "@/config/axios";

export interface SpeciesProps {
  id: number;
  nomeComum: string;
  nomeCientifico: string;
  valor: number;
  classeTaxonomicaId: string;
}

export interface ClasseTaxonomicaProps {
  id: string;
  nome: string;
}

const SpeciesList = () => {
  const [species, setSpecies] = useState<SpeciesProps[]>([]);
  const [classes, setClasses] = useState<ClasseTaxonomicaProps[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data } = await api.get("/classes");
        console.log("data", data);
        setClasses(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchClasses();
  }, []);

  const handleClassChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const classId = event.target.value;
    setSelectedClass(classId);

    try {
      const { data } = await api.get(`species-by-class?classId=${classId}`);
      setSpecies(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Espécies Registradas no Banco de Dados
      </h1>

      <select
        value={selectedClass}
        onChange={handleClassChange}
        className="mb-6 p-2 border border-gray-300 rounded"
      >
        <option value="">Selecione uma Classe Taxonômica</option>
        {classes.map((classe) => (
          <option key={classe.id} value={classe.id}>
            {classe.nome}
          </option>
        ))}
      </select>

      {species.length > 0 ? (
        species.map((specie) => (
          <div
            key={specie.id}
            className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-900 shadow-md"
          >
            <p className="text-white text-lg text-center">{specie.nomeComum}</p>
            <p className="text-gray-400 text-center font-semibold">
              ID: {specie.id}
            </p>
            <p className="text-gray-400 text-center">
              Nome Científico: {specie.nomeCientifico}
            </p>
            <p className="text-gray-400 text-center">Valor: {specie.valor}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">
          Nenhuma espécie encontrada para a classe selecionada.
        </p>
      )}
    </div>
  );
};

export default SpeciesList;
