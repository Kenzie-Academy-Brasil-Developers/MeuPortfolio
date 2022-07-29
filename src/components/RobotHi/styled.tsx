import { styled } from "@/styles/stitches.config";


export const RobotStyled = styled("div", {
  width: "30%",
  position: "absolute",
  right: '-30%',
  //top: "12%",
  "@tablet": {
    ">div": {
        position: "relative",
      },
      '>div::before': {
        content: '',
        width: '60%',
        height: '60%',
        borderRadius: '50%',
        backgroundColor: 'white',
        //z-index: 1;
        top: '20%',
        position: 'absolute',
    },
    right: "-18%",
    top: '-8%',
      //minWidth: '160px',
},
"@mobile": {
    //width: '28%',
    top: '-9%',
    right: '-15%',
    //maxWidth: '30%',
    //top: '75px',

  },
  "@media(max-width: 400px)": {
    top: '-60px',

  }
})
