import styled from "styled-components";

export const ProjectWrapper = styled.div``;

export const ProjectItemContainer = styled.div`
  flex: 50%;
`;

export const ProjectImgContainer = styled.div`
  flex: 50%;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex: 100%;
  }
`;

export const ProjectDetailsContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 30px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex: 100%;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const TechImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechImage = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 10px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;

export const LinkIconWrapper = styled.div`
  margin: 30px 0px 0px 0px;
  display: flex;

  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

export const LinkIconItem = styled.div`
  margin-right: 10px;
`;
