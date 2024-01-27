"use client";

import axios, { AxiosError } from "axios";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "@/components/notify";
import { registerUserFormSchema } from "@/schemas/registerUserFormSchema";

axios.defaults.baseURL = "http://localhost:3000/api";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserFormSchema),
  });

  const errorAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 300 },
  });

  const buttonAnimation = useSpring({
    from: { scale: 0.9 },
    to: { scale: 1 },
    config: { tension: 200, friction: 15 },
  });

  async function registerClient(data: any) {
    try {
      console.log(data);
      const response = await axios.post("/create-client", data);

      if (response.status === 201) {
        notify("Cliente cadastrado com sucesso", "success");
      }
    } catch (err) {
      if (
        err instanceof AxiosError &&
        err?.response?.data.message === "Client already exists"
      ) {
        return notify("Cliente já cadastrado no sistema", "warning");
      }

      notify("Erro ao cadastrar cliente", "error");
    }
  }

  const renderInput = (label: string, name: string, placeholder: string) => (
    <animated.label className="block text-left text-white text-sm font-bold mb-2">
      {label}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 mt-1 border text-left border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
        {...register(name)}
      />
      {errors[name] && (
        <animated.span style={errorAnimation} className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </animated.span>
      )}
    </animated.label>
  );

  return (
    <animated.div className="h-screen bg-[url('/bg-igma.jpg')] bg-cover bg-center flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(registerClient)}
        className="mx-auto grid gap-6 text-center max-w-md p-8 rounded-lg bg-black bg-opacity-90"
      >
        {renderInput("Nome", "name", "Digite seu nome")}
        {renderInput("CPF", "cpf", "000.000.000-00")}
        {renderInput("Data de Aniversário", "birthday", "Data de nascimento")}
        <animated.button
          style={buttonAnimation}
          disabled={Object.keys(errors).length > 0}
          type="submit"
          className="w-full p-3 bg-primary text-black rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
        >
          Cadastrar
        </animated.button>
      </form>
    </animated.div>
  );
};

export default RegisterUser;
