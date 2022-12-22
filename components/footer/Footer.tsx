import React from "react";
import { CustomText } from "../common/text/CustomText";
import { socialData } from "./socialData";
import { FooterWrapper, SocialWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialWrapper>
        {socialData.map((item) => {
          const { id, linkTo, Icon } = item;
          return (
            <a
              href={linkTo}
              key={id}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#27ae60",
              }}
            >
              <Icon size={30} />
            </a>
          );
        })}
      </SocialWrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <CustomText>Designed & Built by Mubarak Muhammed</CustomText>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
