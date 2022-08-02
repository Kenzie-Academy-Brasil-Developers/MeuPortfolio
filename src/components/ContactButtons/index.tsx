import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelopeOpen } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import { userData } from "@/utils/userData";
import { motion, Variants } from "framer-motion";

export const ContactButtons = () => {

    const flexInvertVariant: Variants = {
        offscreen: {
          x: -400,
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

    return (
        <motion.div variants={flexInvertVariant} style={{display:'flex'}} id='contactButtons'>
            <Button className="linkedin" type="circle" as="a" target="_blank" href={`https://linkedin.com/in/${userData.linkedinUser}`}>
            <FaLinkedinIn />
        </Button>
        <Button className="email" type="circle" as="a" target="_blank" href={`mailto:${userData.emailUser}`}>
        <FaEnvelopeOpen />
    </Button>
    <Button className="whatsapp" type="circle" as="a" target="_blank" href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>
    <FaWhatsapp />
</Button>
        </motion.div>

    )

}