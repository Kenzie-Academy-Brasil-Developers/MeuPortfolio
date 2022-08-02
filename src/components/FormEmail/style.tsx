import { styled } from "@/styles/stitches.config";
import { motion } from "framer-motion";


export const FormStyled = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    color:'#D595C9',
    gap:'1.5rem',
    'input, textarea': {
        outline: 'none',
        borderRadius: '10px',
        color:'#D595C9',
        padding: '0.5rem',
        backgroundColor:'transparent',
        border: '2px solid #D595C9',
        '&::placeholder': {
            color: '#D595C9'
        }
    },
})

export const ToastMaker = styled(motion.div, {
    position: 'fixed',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    bottom: '0',
    zIndex: '99999',
    borderRadius: '4px',
    color: '#efc3ea',
    boxShadow: '3px 3px 10px 3px #47DAB9',
    backgroundColor: '#3a1936',
    borderBottom: '5px solid #47DAB9',
    padding: '0.5rem 1rem',
})