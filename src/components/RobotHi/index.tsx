import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationRobot from "../../animations/robotHi.json";
import { RobotStyled } from "./styled";

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

  return (
    <RobotStyled >
      <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </RobotStyled>
  );
}

