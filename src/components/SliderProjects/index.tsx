import { useState } from "react";
import { DescriptionSlider, ImgSlider, Languages, Slider, SliderLeft, SliderRight } from "./styled";
import { Text } from "@/styles/Text";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { motion, Variants } from "framer-motion";



interface SliderProjectsProps {
    description: string;
    imgs: string[];
    languages: string[] | null;
    index: number;
}

export const SliderProjects = ({description, imgs, languages, index }: SliderProjectsProps) /*: JSX.Element*/ => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const projectsVariants: Variants = {
        offscreen: {
          x: index%2 === 0 ? '-100%' : '100%',
          opacity: 0,
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

    return (<Slider variants={projectsVariants}>
        {imgs?.map((img, index) => {
            return index === currentSlide && (<ImgSlider animate={{x: [100, 0]}} key={index}>   
            
                <img src={img}/>
                <SliderLeft id={currentSlide !== 0 ? 'active' : 'inactive'} onClick={() => {
                    if(currentSlide !== 0) {
                        setCurrentSlide(currentSlide - 1)
                    }
                }}><motion.div animate={{ x: [-3,3,-3] }}
                transition={{ repeat: Infinity, duration: 1 }}><MdOutlineChevronLeft/></motion.div></SliderLeft>
                <SliderRight id={currentSlide !== imgs.length-1 ? 'active' : 'inactive'} onClick={() => {
                    if(currentSlide !== imgs.length-1) {
                        setCurrentSlide(currentSlide + 1)
                    }
                }}><motion.div animate={{ x: [-3,3,-3] }}
                transition={{ repeat: Infinity, duration: 1 }}><MdOutlineChevronRight/></motion.div>
                </SliderRight>
                {index === 0 && description && <DescriptionSlider><Text type="body1" color="grey4">
            {description}
            </Text></DescriptionSlider>}
            {index === 0 && <Languages >{languages?.map((language, index) => {
                return (<Text key={index} color="grey4" type="body2">
                <img src={language} height="20px" width="20px" />
              </Text>)
            })}</Languages>}

            </ImgSlider>)
        })}

    </Slider>)




}