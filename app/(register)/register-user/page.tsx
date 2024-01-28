"use client";

import { animated } from "react-spring";
import { Form } from "@/components/Form";
import { BackButton } from "@/components/BackButton";

const RegisterUser = () => {
  return (
    <animated.div className="h-screen w-screen flex">
      <div className="flex-1 flex flex-col justify-center bg-slate-200">
        <Form />
        <BackButton />
      </div>
      <div className="bg-[url('/bg-igma.jpg')] grayscale flex-1 bg-no-repeat bg-cover bg-center"></div>
    </animated.div>
  );
};

export default RegisterUser;
