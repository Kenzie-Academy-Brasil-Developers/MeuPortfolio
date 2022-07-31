import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationGithub from "../../animations/github2.json";
//import { GithubAnimationStyled } from "./styled";

export const GithubAnimation = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationGithub,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
  );
}