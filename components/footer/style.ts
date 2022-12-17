import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-bottom: 30px; */
`;

export const SocialWrapper = styled.div`
  gap: 10px;
  margin-bottom: 15px;
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }
`;
