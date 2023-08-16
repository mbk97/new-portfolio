import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 65vh;
`;

export const IntroWrapper = styled.div`
  margin-top: 2rem;
`;

export const HeaderGreetText = styled.p`
  color: #27ae60;
  font-size: 17px;
`;

export const HeaderTextOne = styled.h2`
  text-transform: capitalize;
  font-size: 80px;
  line-height: 95px;
  margin: 20px 0 0 0;

  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 42px;
  }
`;

export const HeaderTextTwo = styled.h2`
  /* text-transform: capitalize; */
  font-size: 40px;
  line-height: 55px;
  color: #828282;
  margin: 20px 0;
  width: 900px;
  @media (max-width: 900px) {
    font-size: 30px;
    line-height: 42px;
    width: 100%;
  }
`;
