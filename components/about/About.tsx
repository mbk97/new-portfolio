import React from "react";
import {
  ComponentMargin,
  ComponentPadding,
  SectionNum,
} from "../../globalStyle/GlobalStyle";
import CutsomButton from "../common/button/CutsomButton";
import { CustomHeader, CustomText, SubHeader } from "../common/text/CustomText";
import Skills from "./skills/Skills";
import { AboutContent, AboutMeText, TitleContainer } from "./style";

const About = () => {
  return (
    <React.Fragment>
      <ComponentPadding>
        <ComponentMargin />
        <TitleContainer id="about">
          <CustomHeader>
            <SectionNum>02.</SectionNum>
            About Me
          </CustomHeader>
        </TitleContainer>
        <AboutContent>
          <AboutMeText>
            <SubHeader>Get to know me</SubHeader>
            <CustomText>
              Hello! &#128075;, I&#39;m Mubarak, a detail-oriented web
              developer, with 2 years of progressive experience and Diligence
              about producing exceptionally clean, and secure code, while
              successfully achieving browser, device and operating system
              compatibility objectives.
            </CustomText>
            <br />
            <CustomText>
              I&rsquo;ve always had a keen interest in software engineering and
              i felt web development was the perfect field for me to start with.
            </CustomText>
            <br />

            <CustomText>
              My journey as a front-end developer started in 2020 during the
              Pandemic period,and I was lucky to secure an internship at{" "}
              <b
                style={{
                  color: " #27ae60",
                }}
              >
                F and K savings
              </b>{" "}
              (fintech brand) 1 year after i started learning. My main focus
              these days is building accessible, inclusive products and top
              notch digital experiences at{" "}
              <b
                style={{
                  color: " #27ae60",
                }}
              >
                Pledre
              </b>{" "}
              (A platform where virtual schools can be built on) for a variety
              of clients.
            </CustomText>
            <CutsomButton>Contact me</CutsomButton>
          </AboutMeText>
          <Skills />
        </AboutContent>
      </ComponentPadding>
    </React.Fragment>
  );
};

export default About;
