import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import { HandEffect } from "../HandEffect";
import { ContactButtons } from "../ContactButtons";
import user from "../../public/static/img/logo/userME.png"

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={user}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"80px"}
            height={"80px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Até mais!{" "}
             <HandEffect />
            </Text>
            {/*<Text type="body1" color="grey2">
              Follow me on my social networks and let's talk
  </Text>*/}
            {/*<a target="_blank" href="https://icons8.com/icon/77971/developer">Developer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
          </Box>
        </Flex>
        <Flex>
          {/*<Button className="instagram" type="circle" as="a" target="_blank" href={`https://instagram.com`}>
            <FaInstagram />
          </Button>
          <Button className="facebook" type="circle" as="a" target="_blank" href={`https://fb.com`}>
            <FaFacebookF />
          <Button className="linkedin" type="circle" as="a" target="_blank" href={`https://linkedin.com/in/${userData.linkedinUser}`}>
            <FaLinkedinIn />
          </Button>
</Button>*/}
        <div style={{display: 'flex', color: 'grey', gap: '0.5rem', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <ContactButtons/>
        <small> © Copyright - All rights reserved</small>
        </div>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
