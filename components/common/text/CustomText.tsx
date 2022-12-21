import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Text = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;

const PillText = styled(Text)`
  white-space: nowrap;
`;
const Header = styled.h2`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const SubHeader = styled(Header)`
  font-size: 24px;
`;

const SecondaryText = styled(Text)`
  font-size: 20px;
`;

const ProjectTitle = styled(Text)`
  font-size: 24px;
  color: #27ae60;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CustomText = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};

const CustomHeader = ({ children }: IProps) => {
  return <Header>{children}</Header>;
};

export {
  CustomHeader,
  CustomText,
  PillText,
  SubHeader,
  SecondaryText,
  ProjectTitle,
};
