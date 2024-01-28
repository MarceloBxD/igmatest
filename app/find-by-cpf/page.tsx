"use client";

import { AxiosError } from "axios";
import { useState } from "react";
import { animated } from "react-spring";

import { cpfWithMask } from "@/utils/cpfWithMask";
import { isCpfValid } from "@/utils/isCpfValid";
import { api } from "@/config/axios";
import { BackButton } from "@/components/BackButton";

const RegisterUser = () => {
  const [cpf, setCpf] = useState("");
  const [clientData, setClientData] = useState({} as any);
  const [notFound, setNotFound] = useState(false);
  const [invalidCpf, setInvalidCpf] = useState(false);

  const getClientByCpf = async (
    e: React.FormEvent<HTMLFormElement>,
    cpf: string
  ) => {
    e.preventDefault();

    if (!isCpfValid(cpf)) {
      setInvalidCpf(true);
      setNotFound(false);
      setClientData({});
      return;
    }

    try {
      const response = await api.post("/client-by-cpf", {
        cpf: cpfWithMask(cpf),
      });
      setClientData(response.data);
      setNotFound(false);
      setInvalidCpf(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response);
        setNotFound(true);
        setInvalidCpf(false);
        setClientData({});
      }
    }
  };

  return (
    <animated.div className="h-screen w-screen flex">
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-200">
        <form
          className="max-w-[50%] w-full"
          onSubmit={(e) => getClientByCpf(e, cpf)}
        >
          <animated.label className="flex flex-col text-left text-black text-sm font-bold mb-2">
            CPF
          </animated.label>
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-3 mt-1 border text-left border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
          />
          <animated.button
            type="submit"
            className="w-full mt-3 p-3 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
          >
            Buscar
          </animated.button>
        </form>
        {clientData?.name ? (
          <div className="mt-4 max-w-[50%] mx-auto w-full p-4 border border-gray-300 rounded-md bg-white shadow-md">
            <p className="text-lg font-semibold text-black">
              {clientData.name}
            </p>
            <p className="text-gray-600">{clientData.cpf}</p>
            <p className="text-gray-600">{clientData.birthday}</p>
          </div>
        ) : invalidCpf ? (
          <h1 className="text-red-500 font-semibold">
            CPF inválido. Por favor, insira um CPF válido.
          </h1>
        ) : notFound ? (
          <h1 className="text-black font-semibold">
            Não foi encontrado um cliente com esse CPF em nossa base de dados.
          </h1>
        ) : null}{" "}
        {/* Adiciona um nulo para não renderizar nada se ainda não tiver feito a busca */}
        <BackButton />
      </div>
      <div className="bg-[url('/bg-igma.jpg')] hidden md:flex grayscale flex-1 bg-no-repeat bg-cover bg-center"></div>
    </animated.div>
  );
};

export default RegisterUser;
