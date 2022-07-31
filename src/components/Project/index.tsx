import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import repositories from "@/utils/reposData";
import { GithubAnimation } from "../GitHubAnimation";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  imgUrl: string;
}

export const Project = (): JSX.Element => {

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey4"
          >
            {repository.name}
          </ProjectTitle>

          <ProjectStack>
            <Text type="body2" color="grey2">
              Linguagem:
            </Text>
            {repository.language ? (
              <ProjectStackTech>
                <Text color="grey2" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            ) : (
              <ProjectStackTech>
                <Text color="grey2" type="body2">
                  Not identified
                </Text>
              </ProjectStackTech>
            )}
          </ProjectStack>

          <Text type="body1" color="grey2">
            {repository.description?.substring(0, 129)}
          </Text>
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
    </>
  );
};
