
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { Robot } from "@/components/RobotHi"
import { motion, useViewportScroll, Variants } from "framer-motion";



import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ContainerImage,
} from "./style";
import { GithubAnimation } from "@/components/GitHubAnimation";
import user from "../../public/static/img/logo/userME.png"


export const Home = (): JSX.Element => {
  const { scrollYProgress } = useViewportScroll();

  const flexVariant: Variants = {
    offscreen: {
      x: -300,
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

  const projectsVariants: Variants = {
    offscreen: {
      x: -100,
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
    <main id="home">
      <Header>
        <Container>
          <HeaderContent initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}>
          <Robot/>
            <Flex variants={flexVariant}>
            <ContainerImage>
          <UserImage
            src={user}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"100px"}
            height={"100px"}
          />
          <div></div>
          </ContainerImage>
              
              <div id='typing'>
              <Text color="grey4">
                Olá, me chamo Vitória
              </Text>
              </div>
            </Flex>
            <motion.div variants={flexVariant}>
            <Text as="h1" type="heading1" color="grey4">
              <Text as="span" type="heading1" color="brand1">
                Amo
              </Text>{" "}
              criar e {" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey4">
              Aqui poderá conhecer alguns de meus projetos e tecnologias que aprendi
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button
                as="a"
                type="circle"
                target="_blank"
                href={`https://github.com/${userData.githubUser}`}
              >
                <GithubAnimation/>
              </Button>
            </HeaderButtonsArea>

            </motion.div>
            
          </HeaderContent>
        </Container>
        
      </Header>
      <StackCards id="technologies" initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}>
       
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}

      </StackCards>
      
      <ProjectsArea id="projects" initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage variants={projectsVariants}>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              {/*<Text as="p" type="body1" color="grey2">
                Projetos cread{" "}
                <Text as="span" color="brand5">
                  Kenzie Academy
                </Text>
              </Text>*/}
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent variants={projectsVariants}>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
