import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";
import { Text } from "../../styles/Text";
import { motion } from "framer-motion";


export const Slider = styled(motion.div, {
    width: '90%',
    overflow: "hidden",
    borderRadius: '10px',
    height: '65%',
})

export const ImgSlider = styled(motion.div, {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    position: 'relative',
    '#inactive': {
        display: 'none'
    },
    '#active': {

        //backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(213, 149, 201,0.5)',
        borderRadius: '50%',
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        '>div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }, 
    '>img': {
        borderRadius: '10px',
        height: '100%',
        width: '100%',
        //'object-fit': 'cover',
    },

})

export const DescriptionSlider = styled(motion.div, {
    position: 'absolute',
    zIndex: '1',
    top: '0',
    width: '100%',
    height: '100%',
    //background: 'rgb(0,0,0)',
    background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(20,6,20,0.7) 50%, rgba(101,29,94,0.7) 100%)',
    //backdropFilter: 'opacity(0.1)',
    //backgroundColor: 'rgba(0,0,0,0.5)',
    color:'white',
    padding: '0 3rem',
    display: 'flex',
    alignItems: 'center',
    '>p': {
        width: '100%',
        maxHeight: '90%',
        display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '5',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        
    }

})

export const SliderLeft = styled('div', {
    position: 'absolute',
    zIndex: '2',
    height: "10%",
    top: '40%',
    left: '0.2rem',
    cursor: "pointer",
    color:'$grey4',
})

export const SliderRight = styled('div', {
    position: 'absolute',
    zIndex: '2',
    top: '40%',
    height: "10%",
    right: '0.2rem',
    cursor: "pointer",
    color:'$grey4',

})

export const Languages = styled(motion.div, {
    position: 'absolute',
    zIndex: '3',
    display: 'flex',
    flexDirection: 'column',
    bottom: '0.2rem',
    left: '0.2rem',
    gap: '0.5rem',
    '>p': {
        //padding: '0rem 0.2rem',
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        backgroundColor: 'rgba(213, 149, 201,1)',

    }

})