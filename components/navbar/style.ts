import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 80px;
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 50px;
  z-index: 1;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const LogoText = styled.h1`
  font-family: "Sevillana", cursive;
`;

export const NavLogo = styled.div`
  cursor: pointer;
  color: #27ae60;
`;

export const NavItemsWrapper = styled.ul`
  display: flex;
  gap: 25px;

  @media (max-width: 900px) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    /* background: red; */
    height: 100vh;
    width: 90vw;
    z-index: 1;
    left: -500px;
    opacity: 0;
    top: 0px;
    transition: all ease-in-out 0.2s;

    &.active {
      left: 0px;
      opacity: 1;
    }
  }
`;

export const NavItemList = styled.li`
  font-size: 17px;
  text-decoration: none;
  list-style: none;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  color: #27ae60;
`;

export const NavBtnWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
