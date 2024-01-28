"use client";

import { AxiosError } from "axios";
import { useState } from "react";

import { cpfWithMask } from "@/utils/cpfWithMask";
import { isCpfValid } from "@/utils/isCpfValid";
import { api } from "@/config/axios";
import { BackButton } from "@/components/BackButton";
import { FormBackground } from "@/components/FormBackground";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { findClientByCpfSchema } from "@/schemas/findClientByCpfSchema";
import Button from "@/components/Button";
import { ClientCard } from "@/components/ClientCard";

const RegisterUser = () => {
  const [clientData, setClientData] = useState({} as any);
  const [notFound, setNotFound] = useState(false);
  const [invalidCpf, setInvalidCpf] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(findClientByCpfSchema),
  });

  const getClientByCpf = async (cpf: string) => {
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
      console.log(clientData);
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

  const FindByCpfForm = () => {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-200">
        <form
          className="max-w-[50%] w-full"
          onSubmit={handleSubmit((data) => getClientByCpf(data.cpf))}
        >
          <Input label="CPF" register={register} name="cpf" errors={errors} />
          <Button title="Buscar" />
        </form>
        {clientData?.name ? (
          <ClientCard clientData={clientData} />
        ) : invalidCpf ? (
          <h1 className="text-red-500 font-semibold">
            CPF inválido. Por favor, insira um CPF válido.
          </h1>
        ) : notFound ? (
          <h1 className="text-black font-semibold">
            Não foi encontrado um cliente com esse CPF em nossa base de dados.
          </h1>
        ) : null}{" "}
        <BackButton />
      </div>
    );
  };

  return <FormBackground form={<FindByCpfForm />} />;
};

export default RegisterUser;
