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

const About = () => {
  return (
    <React.Fragment>
      <ComponentPadding>
        <ComponentMargin />
        <TitleContainer id="about">
          <CustomHeader>
            <SectionNum>02.</SectionNum>
            About me
          </CustomHeader>
        </TitleContainer>
        <AboutContent>
          <AboutMeText>
            <SubHeader>Get to know me</SubHeader>
            <CustomText>Hello! 👋</CustomText>
            <br />
            <CustomText>
              I&#39;m Mubarak, a detail-oriented web developer with 2 years of
              experience in writing exceptionally clean, and secure codes, while
              successfully achieving user friendly and operating system
              compatibility objectives.
            </CustomText>
            <br />

            <CustomText>
              My journey as a web developer kicked off in 2020 during the
              COVID-19 pandemic and I secured an internship at{" "}
              <b
                style={{
                  color: " #27ae60",
                }}
              >
                F and K savings
              </b>{" "}
              (FinTech brand), one year after I started learning.
              <br />
              <br />
              My main focus currently is building accessible, inclusive products
              and top notch digital experiences at {""}
              <b
                style={{
                  color: " #27ae60",
                }}
              >
                Pledre
              </b>{" "}
              (E-learning provider that allows any individual, school or
              organisation create a virtual learning environment).
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
