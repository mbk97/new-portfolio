import React from "react";
import styled from "styled-components";
import { CustomText, PillText } from "../text/CustomText";

interface IProps {
  image?: any;
  text?: string;
}

const Container = styled.div`
  background-color: #212121;
  padding: 10px 15px;
  /* width: auto; */
  border-radius: 9px;
  display: inline-block;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
`;

const Pills = ({ text, image }: IProps) => {
  return (
    <Container>
      <ContentContainer>
        <Image src={image} alt="Skill image" />
        <PillText>{text}</PillText>
      </ContentContainer>
    </Container>
  );
};

export default Pills;
