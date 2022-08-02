import { Button } from "@/styles/Buttons"
import { FormStyled, ToastMaker } from "./style"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { usePresence, AnimatePresence } from "framer-motion"
import Lottie from "react-lottie";
import animationSuccess from "../../animations/95088-success.json";



export const FormEmail = () => {

    const [success, setSuccess] = useState(false)

   const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


    const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    

    if (form.current !== null) {
        emailjs.sendForm('service_oexa0u9', "template_h64x1uu", form.current, '-UcZlFSKiX5Iu9GVq')
      .then((result) => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        
    }, 5100);
        
      }, (error) => {
          console.log(error.text);
      });
        
      }
    

    
  };
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])


    return (
        <>
        <div style={{width: '90%', alignSelf: 'center', justifySelf: 'center'}}>
            <FormStyled ref={form} onSubmit={sendEmail}>
            <input placeholder="Nome" name="name" required/>
            <input type='email' placeholder="Seu e-mail" name="email" required/>
            <textarea placeholder="Mensagem" name="message" id='message' rows={7} required ></textarea>
            <Button type="primary">
                Enviar email
            </Button>
        </FormStyled>
        </div>
        <AnimatePresence>
        {success && <ToastMaker initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '100%' }} transition={{duration: 1}}>
            <p>Mensagem enviada! Logo você receberá uma resposta, obrigada pelo contato.</p>
            <div style={{width: '10rem', justifySelf: 'center'}}>
        <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      </div>
            </ToastMaker>}
        </AnimatePresence>
        </>
    )
}