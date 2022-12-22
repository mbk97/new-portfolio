import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import {
  SectionNum,
  ComponentMargin,
  ComponentPadding,
} from "../../globalStyle/GlobalStyle";
import { TitleContainer } from "../about/style";
import Pills from "../common/pills/Pills";
import {
  CustomHeader,
  CustomText,
  ProjectTitle,
} from "../common/text/CustomText";
import { projecData } from "./data";
import {
  LinkIconItem,
  LinkIconWrapper,
  ProjectDetailsContainer,
  ProjectImg,
  ProjectImgContainer,
  ProjectItemContainer,
  ProjectWrapper,
  TechImage,
  TechImageWrapper,
} from "./style";

const Projects = () => {
  return (
    <ComponentPadding>
      <ProjectWrapper>
        <ComponentMargin />
        <TitleContainer id="projects">
          <CustomHeader>
            <SectionNum>03.</SectionNum>
            Some things i&rsquo;ve built
          </CustomHeader>
        </TitleContainer>
        <React.Fragment>
          {projecData.map((item) => {
            return (
              <ProjectDetailsContainer key={item.id}>
                <ProjectImgContainer>
                  <ProjectImg src={item.projectImg} />
                </ProjectImgContainer>
                <ProjectItemContainer>
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <ProjectTitle>{item.name}</ProjectTitle>
                    <CustomText>{item.description}</CustomText>
                  </div>

                  <div
                    style={{
                      margin: "20px 0",
                    }}
                  >
                    <ProjectTitle>Technologies:</ProjectTitle>
                  </div>
                  <TechImageWrapper>
                    {item.technologies.map((item) => {
                      return (
                        <Pills
                          image={item.img}
                          text={item.text}
                          key={item.id}
                        />
                      );
                    })}
                  </TechImageWrapper>
                  <LinkIconWrapper>
                    <LinkIconItem>
                      {item.githubLink && (
                        <a
                          href={item.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "#ffffff",
                          }}
                        >
                          <FiGithub size={30} />
                        </a>
                      )}
                    </LinkIconItem>
                    <LinkIconItem>
                      {item.websiteLink && (
                        <a
                          href={item.websiteLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "#ffffff",
                          }}
                        >
                          <TbExternalLink size={30} />
                        </a>
                      )}
                    </LinkIconItem>

                    <LinkIconItem>
                      {item.githubTwo && (
                        <a
                          href={item.githubTwo}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "#ffffff",
                          }}
                        >
                          <AiFillDatabase size={30} />
                        </a>
                      )}
                    </LinkIconItem>
                  </LinkIconWrapper>
                </ProjectItemContainer>
              </ProjectDetailsContainer>
            );
          })}
        </React.Fragment>
      </ProjectWrapper>
    </ComponentPadding>
  );
};

export default Projects;
