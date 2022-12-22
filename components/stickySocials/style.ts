import styled from "styled-components";

export const LeftItems = styled.div``;

export const RightItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 1px;
  margin: 10px 0;
`;

export const StickyLine = styled.div`
  background-color: white;
  height: 60px;
  width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const StickyItem = styled.div`
  margin-bottom: 20px;
  color: #27ae60;
`;

export const RightStickyBarWrapper = styled.div`
  position: sticky;
  float: right;
  bottom: 0;
  right: 0px;
  width: 70px;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LeftStickyBarWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  left: 0;
  padding-left: 40px;
  width: 90px;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  color: white;
`;
