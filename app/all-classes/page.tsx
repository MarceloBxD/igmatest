"use client";

import { BackButton } from "@/components/BackButton";
import { Card } from "@/components/Card";
import { api } from "@/config/axios";
import { useEffect, useState } from "react";
import { useTrail, config } from "react-spring";

interface ClassesProps {
  id: number;
  nome: string;
  descricao: string;
}

const AllSpecies = () => {
  const [classes, setClasses] = useState<ClassesProps[]>([]);

  useEffect(() => {
    const getAllClasses = async () => {
      try {
        const { data } = await api.get(`/classes`);
        setClasses(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllClasses();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Dados Registrados no Banco de Dados
      </h1>
      {classes.map((props, index) => (
        <Card data={classes[index]} key={index} />
      ))}

      <BackButton />
    </div>
  );
};

export default AllSpecies;
