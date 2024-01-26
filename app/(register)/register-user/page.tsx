"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { validateCpf } from "@/utils/validateCpf";

const registerUserFormSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres").max(50),
  cpf: z.string().refine((cpf) => validateCpf(cpf), "CPF inválido"),
  birthday: z.date(),
});

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserFormSchema),
  });

  function registerUser(data: any) {
    console.log(data);
  }

  return (
    <div className="h-screen pt-32">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="mx-auto grid gap-6 text-center max-w-md p-8 rounded-lg shadow-md"
      >
        <label className="block text-white text-sm font-bold mb-2">
          Nome
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message as string}
            </span>
          )}
        </label>

        <label className="block text-white text-sm font-bold mb-2">
          CPF
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
            {...register("cpf")}
          />
          {errors.cpf && (
            <span className="text-red-500 text-sm">
              {errors.cpf.message as string}
            </span>
          )}
        </label>

        <label className="block text-white text-sm font-bold mb-2">
          Data de Aniversário
          <input
            type="date"
            placeholder="Selecione a data"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
            {...register("birthday")}
          />
          {errors.birthday && (
            <span className="text-red-500 text-sm">
              {errors.birthday.message as string}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
