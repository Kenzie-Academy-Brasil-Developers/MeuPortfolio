import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationRobot from "../../animations/robotHi.json";
import { RobotStyled } from "./styled";
import { Variants } from "framer-motion";


export const Robot = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationRobot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const robotVariant: Variants = {
    offscreen: {
      x: 300,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  };

  return (
    <RobotStyled variants={robotVariant}>
      <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </RobotStyled>
  );
}

