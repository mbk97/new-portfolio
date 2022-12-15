import React from "react";
import { ComponentMargin } from "../../globalStyle/GlobalStyle";
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
    <HeaderWrapper>
      <ComponentMargin />
      <IntroWrapper>
        <HeaderGreetText>Hi, my name is </HeaderGreetText>
        <HeaderTextOne>Mubarak Muhammed.</HeaderTextOne>
        <HeaderTextTwo>I build things for the web</HeaderTextTwo>
        <React.Fragment>
          <CutsomButton>Download cv</CutsomButton>
          <CutsomButton secondary>Learn more</CutsomButton>
        </React.Fragment>
      </IntroWrapper>
    </HeaderWrapper>
  );
};

export default Header;
