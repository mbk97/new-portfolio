import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const AboutMeText = styled.div``;
