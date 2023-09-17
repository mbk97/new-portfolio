import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

const PillText = styled(Text)`
  white-space: nowrap;
`;
const Header = styled.h2`
  font-family: "Sevillana", cursive;
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
  font-family: "DM Sans";
`;

const SecondaryText = styled(Text)`
  font-size: 20px;
`;

const ProjectTitle = styled(Text)`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const ProjectTechTitle = styled(ProjectTitle)`
  color: #ffffff;
  font-size: 16px;
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
  ProjectTechTitle,
};
