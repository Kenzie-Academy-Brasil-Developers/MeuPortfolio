import { styled } from "@/styles/stitches.config";
import { motion } from "framer-motion";


export const RobotStyled = styled(motion.div, {
  width: "30%",
  position: "absolute",
  right: '-30%',
  '>div::before': {
    content: '',
    width: '40%',
    height: '10%',
    borderRadius: '50%',
    backgroundColor: 'rgb(37, 34, 36)',
    //z-index: 1;
    right: '27%',
    filter: "blur(0.2rem)",
    top: '83%',
    position: 'absolute',
},
  //top: "12%",
  "@tablet": {
    ">div": {
        position: "relative",
      },
      /*'>div::before': {
        content: '',
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        backgroundColor: 'white',
        //z-index: 1;
        top: '20%',
        position: 'absolute',
    },*/
    right: "-18%",
    top: '-8%',
      //minWidth: '160px',
},
"@mobile": {
    //width: '28%',
    top: '-1%',
    right: '-25%',
    //maxWidth: '30%',
    //top: '75px',

  },
  /*"@media(max-width: 400px)": {
    top: '-10px',

  }*/
})
