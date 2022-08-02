import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useViewportScroll, Variants } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { ContactAnimation } from "../ContactAnimation";
import { FormEmail } from "../FormEmail";
import { ContactButtons } from "../ContactButtons";

export const Contacts = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useViewportScroll();

  const flexVariant: Variants = {
    offscreen: {
      x: 300,
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

  const flexInvertVariant: Variants = {
    offscreen: {
      x: '-100%',
      opacity: 0,
    },
    onscreen: {
      x: '0%',
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  };

  return (
    <ContactSection id="contact" initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.5 }}>
      
      <Container>
        <ContactButtons/>
        <ContactSectionContent ref={ref}>
          <motion.div variants={flexInvertVariant} style={{ opacity: scrollYProgress }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
              Vamos marcar uma conversa e{" "}
                <Text as="span" type="heading2" color="brand1">
                desenvolver algo
                </Text>{" "}
                juntos?
              </Text>
              {/*<Text color="grey2" type="body1">
                Advertise your brand organically within Dribbble’s design
                inspiration feed.
  </Text>*/}
          <ContactAnimation/>
            </ContactSectionText>
          </motion.div>
          <ContactsCards initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.5 }}>
            <FormEmail/>
            {/*<ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                Estou disponível para um bate-papo por voz, vamos bater um papo?
                </Text>
                <Text
                  as="a"
                  color="grey4"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Falar agora
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu email
                </Text>
                <Text color="grey2" type="body2">
                Envie-me um e-mail passando feedbacks, sugestões ou ideias
                </Text>
                <Text
                  as="a"
                  color="grey4"
                  type="body2"
                  target="_blank"
                  href={`mailto:${userData.emailUser}`}
                >
                  Enviar email agora
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  Meu LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                Podemos criar interações mais constantes, bem como fazer network
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://linkedin.com/in/${userData.linkedinUser}`}
                >
                  Ir para Linkedin agora
                </Text>
              </ContactCardContent>
</ContactCard>*/}
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
