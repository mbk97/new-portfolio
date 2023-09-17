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
import CutsomButton from "../common/button/CutsomButton";
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
  ProjectLink,
  ProjectWrapper,
  TechImage,
  TechImageWrapper,
} from "./style";
import { HeaderTextThree } from "../header/style";

const Projects = () => {
  return (
    <ComponentPadding>
      <ProjectWrapper>
        <ComponentMargin />
        <TitleContainer id="projects">
          <HeaderTextThree>Some things i&rsquo;ve built</HeaderTextThree>
        </TitleContainer>
        <React.Fragment>
          {projecData.map((item) => {
            return (
              <ProjectDetailsContainer
                key={item.id}
                className={item.class ? "random" : ""}
              >
                <ProjectImgContainer data-aos={item.aos}>
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
                        <ProjectLink
                          href={item.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github <FiGithub />
                        </ProjectLink>
                      )}
                    </LinkIconItem>
                    <LinkIconItem>
                      {item.websiteLink && (
                        <ProjectLink
                          href={item.websiteLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website <TbExternalLink />
                        </ProjectLink>
                      )}
                    </LinkIconItem>

                    <LinkIconItem>
                      {item.githubTwo && (
                        <ProjectLink
                          href={item.githubTwo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Api
                          <AiFillDatabase />
                        </ProjectLink>
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
