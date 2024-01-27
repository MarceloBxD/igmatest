"use client";

import { animated } from "react-spring";
import { Form } from "@/components/Form";


const RegisterUser = () => {
  return (
    <animated.div className="h-screen bg-[url('/bg-igma.jpg')] bg-cover bg-center flex items-center justify-center ">
      <Form />
    </animated.div>
  );
};

export default RegisterUser;
