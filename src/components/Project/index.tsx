import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";
import { userData } from "@/utils/userData";
import { GithubAnimation } from "@/components/GitHubAnimation";
import { Button } from "@/styles/Buttons";
import { Variants } from "framer-motion"


import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import repositories from "@/utils/reposData";
import { SliderProjects } from "../SliderProjects";

/*interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  imgUrl: string[];
}*/



export const Project = (): JSX.Element => {

  return (
    <>
      {repositories?.map((repository, index) => (
        <ProjectWrapper  initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.4 }} key={repository.id} >
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey4"
          >
            {repository.name}
          </ProjectTitle>
          
          {repository.imgs && <SliderProjects index={index} languages={repository.languages} imgs={repository.imgs} description={repository.description}/>}
          {!repository.imgs &&<Text type="body1" color="grey2">
            {repository.description?.substring(0, 129)}
            </Text>}
          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.html_url}>
              <GithubAnimation/> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}

      
      
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}><Text  type="body1" color="grey2">
      Veja mais projetos no github --&gt;
      
      </Text>
      <Button
                as="a"
                type="circle"
                target="_blank"
                href={`https://github.com/${userData.githubUser}`}
              >
                <GithubAnimation/>
            </Button></div>
    </>
  );
};
