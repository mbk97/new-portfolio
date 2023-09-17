import React from "react";
import {
  ComponentMargin,
  ComponentPadding,
  SectionNum,
} from "../../globalStyle/GlobalStyle";
import CutsomButton from "../common/button/CutsomButton";
import { CustomHeader, CustomText, SubHeader } from "../common/text/CustomText";
import { EmailLink } from "../stickySocials/style";
import Skills from "./skills/Skills";
import { AboutContent, AboutMeText, TitleContainer } from "./style";
import { HeaderTextThree } from "../header/style";

const About = () => {
  return (
    <React.Fragment>
      <ComponentPadding>
        <ComponentMargin />
        <TitleContainer id="about">
          <HeaderTextThree>About me</HeaderTextThree>
        </TitleContainer>
        <AboutContent>
          <AboutMeText>
            <SubHeader>Get to know me</SubHeader>
            <CustomText>Hello! 👋</CustomText>
            <br />
            <CustomText>
              I&#39;m Mubarak Muhammed, a result-driven software developer with
              a passion for crafting innovative and user-friendly websites and
              applications. From my education in Pure and Applied Physics at
              Ladoke Akintola University to my professional experiences at Wema
              Bank, Pledre, and F&K Savings, I&#39;ve honed the art of
              delivering high-quality solutions.
            </CustomText>
            <br />

            <CustomText>
              My expertise ranges from streamlining operations through
              automation to architecting intuitive user dashboards and
              webistes.My commitment to pushing the boundaries of web
              development reflects my unwavering dedication to crafting digital
              experiences that resonate deeply with users and drive tangible
              impact.
            </CustomText>
            <br />
            <CutsomButton>
              <EmailLink href="mailto:oyindamola850@gmail.com">
                Contact me
              </EmailLink>
            </CutsomButton>
          </AboutMeText>
          <Skills />
        </AboutContent>
      </ComponentPadding>
    </React.Fragment>
  );
};

export default About;
