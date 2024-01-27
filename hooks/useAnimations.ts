"use client";

import { useSpring } from "react-spring";

export const buttonAnimation = useSpring({
  from: { scale: 0.9 },
  to: { scale: 1 },
  config: { tension: 200, friction: 15 },
});

export const errorAnimation = useSpring({
  from: { opacity: 0, transform: "translateY(10px)" },
  to: { opacity: 1, transform: "translateY(0)" },
  config: { duration: 300 },
});
