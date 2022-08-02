import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationContact from "../../animations/contact.json";
//import { GithubAnimationStyled } from "./styled";

export const ContactAnimation = () => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationContact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <div style={{width: '70%', justifySelf: 'center'}}>
        <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      </div>
  );
}