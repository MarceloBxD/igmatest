import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { animated, useSpring } from "react-spring";
import { zodResolver } from "@hookform/resolvers/zod";

import {Input} from "../Input/";
import { registerClient } from "@/services/registerClient";
import { registerUserFormSchema } from "@/schemas/registerUserFormSchema";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserFormSchema),
  });

  const [animation, setAnimation] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(20px)",
  }));

  useEffect(() => {
    setAnimation({
      opacity: 1,
      transform: "translateY(0px)",
    });
  }, [setAnimation, errors]);

  return (
    <form
      onSubmit={handleSubmit(registerClient)}
      className="mx-auto grid w-full gap-6 text-center max-w-md p-8 rounded-lg  bg-opacity-90"
      data-testid="form-testid"
    >
      <Input errors={errors} label="Nome" name="name" register={register} />
      <Input errors={errors} label="CPF" name="cpf" register={register} />
      <Input
        errors={errors}
        label="Data de Nascimento"
        name="birthday"
        register={register}
        masked
      />

      <animated.button
        style={{ ...animation }}
        disabled={Object.keys(errors).length > 0}
        type="submit"
        className="w-full p-3 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
        data-testid="form-button-testid"
      >
        Cadastrar
      </animated.button>
    </form>
  );
};
