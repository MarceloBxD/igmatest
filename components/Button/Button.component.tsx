import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

export const Button = ({ title = 'Button Text' }: ButtonProps) => {
  return (
    <animated.button
      type="submit"
      className="w-full mt-3 p-3 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
      data-testid="button-testid"
    >
      {title}
    </animated.button>
  );
};
