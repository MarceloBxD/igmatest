import React from "react";
import { animated, useSpring } from "@react-spring/web";
import InputMask from "react-input-mask";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  masked?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: any;
}

const inputAnimation = {
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0px)" },
};

const Input: React.FC<InputProps> = ({
  errors,
  label,
  name,
  masked,
  register,
}) => {
  return (
    <animated.div>
      <div className="mb-4">
        <animated.label className="flex flex-col text-left text-black text-sm font-bold mb-2">
          {label}
        </animated.label>

        {masked ? (
          <InputMask
            mask="99/99/9999"
            maskChar={null}
            className="w-full p-3 mt-1 border text-left text-gray-900  border-gray-300 rounded-md focus:outline-none focus:border-primary "
            {...register(name)}
          />
        ) : (
          <input
            className="w-full p-3 mt-1 border text-gray-900 text-left border-gray-300 rounded-md focus:outline-none focus:border-primary "
            {...register(name)}
          />
        )}

        {errors[name] && (
          <animated.span className="text-red-500 flex text-sm">
            {errors[name]?.message as string}
          </animated.span>
        )}
      </div>
    </animated.div>
  );
};

export default Input;
