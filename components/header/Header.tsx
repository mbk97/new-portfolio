import React from "react";
import { Link } from "react-scroll";
import {
  ComponentMargin,
  ComponentPadding,
} from "../../globalStyle/GlobalStyle";
import CutsomButton from "../common/button/CutsomButton";
import {
  HeaderGreetText,
  HeaderTextOne,
  HeaderTextTwo,
  HeaderWrapper,
  IntroWrapper,
} from "./style";

const Header = () => {
  return (
    <ComponentPadding id="home">
      <HeaderWrapper>
        <ComponentMargin />
        <IntroWrapper>
          <HeaderGreetText>Hi, my name is </HeaderGreetText>
          <HeaderTextOne>Mubarak Muhammed.</HeaderTextOne>
          <HeaderTextTwo>
            I build top notch digital products for the web.
          </HeaderTextTwo>
          <React.Fragment>
            <a href="/resume/mubarak-dev-resume.pdf" download={true}>
              <CutsomButton>Download resume</CutsomButton>
            </a>
            <Link to="about" smooth={true} offset={-80}>
              <CutsomButton secondary>Learn more</CutsomButton>
            </Link>
          </React.Fragment>
        </IntroWrapper>
      </HeaderWrapper>
    </ComponentPadding>
  );
};

export default Header;
