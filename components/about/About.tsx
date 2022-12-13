import React from "react";
import { ComponentMargin, SectionNum } from "../../globalStyle/GlobalStyle";
import CutsomButton from "../common/button/CutsomButton";
import Pills from "../common/pills/Pills";
import { CustomHeader, CustomText, SubHeader } from "../common/text/CustomText";
import Skills from "./skills/Skills";
import { AboutContent, AboutMeText, TitleContainer } from "./style";

const About = () => {
  return (
    <React.Fragment>
      <ComponentMargin />
      <TitleContainer>
        <CustomHeader>
          <SectionNum>01.</SectionNum>
          About Me
        </CustomHeader>
      </TitleContainer>
      <AboutContent>
        <AboutMeText>
          <SubHeader>Get to know me</SubHeader>
          <CustomText>
            Hello! &#128075;, I&#39;m Mubarak, a detail-oriented web developer,
            with 2 years of progressive experience and Diligence about producing
            exceptionally clean, and secure code; while successfully achieving
            browser, device and operating system compatibility objectives.
          </CustomText>
          <br />
          <CustomText>
            I&rsquo;ve always had a keen interest in software engineering and i
            felt web development was the perfect field for me to start with.
          </CustomText>
          <br />

          <CustomText>
            Fast-forward to today, and I’ve had the privilege of working as a
            front-end developer intern at F and K savings (Fintech brand). My
            main focus these days is building accessible, inclusive products and
            top notch digital experiences at Pledre (A platform where virtual
            schools can be built on) for a variety of clients.
          </CustomText>
          <CutsomButton>Contact me</CutsomButton>
        </AboutMeText>
        <Skills />
      </AboutContent>
    </React.Fragment>
  );
};

export default About;
