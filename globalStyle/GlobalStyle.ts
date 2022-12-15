import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
     margin: 0;
    padding: 0;
    background-color: #171717;
    color: #ffffff;
}
  
`;

export const GeneralWrapper = styled.div`
  padding: 0 80px;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const TitleHeader = styled.h1`
  color: #27ae60;
  /* font-family: "Roboto", sans-serif; */
`;

export const ComponentMargin = styled.div`
  margin-top: 5rem;
`;

export const SectionNum = styled.span`
  margin-right: 10px;
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 22px;
  line-height: 62px;
  color: #27ae60;

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
