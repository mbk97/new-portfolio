import React from "react";
import { ComponentMargin } from "../../globalStyle/GlobalStyle";
import { CustomText } from "../common/text/CustomText";
import { socialData } from "./socialData";
import { FooterWrapper, SocialWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <ComponentMargin />
      <SocialWrapper>
        {socialData.map((item) => {
          const { id, linkTo, Icon } = item;
          return (
            <a href={linkTo} key={id} target="_blank" rel="noreferrer">
              <Icon size={30} />
            </a>
          );
        })}
      </SocialWrapper>
      <CustomText>Designed & Built by Mubarak Muhammed</CustomText>
    </FooterWrapper>
  );
};

export default Footer;
