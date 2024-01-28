import { useForm } from "react-hook-form";
import { animated } from "react-spring";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSpring } from "react-spring";
import InputMask from "react-input-mask";
import { registerUserFormSchema } from "@/schemas/registerUserFormSchema";
import { registerClient } from "@/services/registerClient";

export const Form = ({ getClientByCpf }: { getClientByCpf?: boolean }) => {
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

  const renderInput = (label: string, name: string, masked?: boolean) => (
    <div>
      <animated.label className="flex flex-col text-left text-black text-sm font-bold mb-2">
        {label}
      </animated.label>

      {masked ? (
        <InputMask
          mask="99/99/9999"
          maskChar={null}
          className="w-full p-3 mt-1 border text-left  border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
          {...register(name)}
        />
      ) : (
        <input
          className="w-full p-3 mt-1 border text-left border-gray-300 rounded-md focus:outline-none focus:border-primary dark:border-neutral-700 dark:bg-gray-900"
          {...register(name)}
        />
      )}

      {errors[name] && (
        <animated.span
          style={errorAnimation}
          className="text-red-500 flex text-sm"
        >
          {errors[name]?.message as string}
        </animated.span>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(registerClient)}
      className="mx-auto grid w-full gap-6 text-center max-w-md p-8 rounded-lg  bg-opacity-90"
    >
      {renderInput("Nome", "name")}
      {renderInput("CPF", "cpf")}
      {renderInput("Data de Aniversário", "birthday", true)}
      <animated.button
        disabled={Object.keys(errors).length > 0}
        type="submit"
        className="w-full p-3 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
      >
        Cadastrar{" "}
      </animated.button>
    </form>
  );
};
