import React from "react";
import {
  NavBtnWrapper,
  NavItemList,
  NavItemsWrapper,
  NavLogo,
  NavWrapper,
  Span,
  LogoText,
} from "./style";
import { Link } from "react-scroll";
import { navData } from "./data";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <NavWrapper>
      <NavLogo>
        <Link to="home" smooth={true} offset={-250}>
          <LogoText>Mubarak</LogoText>
        </Link>
      </NavLogo>

      <NavItemsWrapper className={click ? "active" : ""}>
        {navData.map(({ id, text, linkTo, textNo }) => {
          return (
            <NavItemList key={id}>
              <Link
                to={linkTo}
                smooth={true}
                offset={textNo === "01" ? -250 : -80}
                onClick={handleClick}
              >
                <Span>{textNo}.</Span> {text}
              </Link>
            </NavItemList>
          );
        })}
      </NavItemsWrapper>

      <NavBtnWrapper>
        {click ? (
          <AiOutlineClose onClick={handleClick} size={30} color="#27ae60" />
        ) : (
          <AiOutlineMenuUnfold
            size={30}
            color="#27ae60"
            onClick={handleClick}
          />
        )}
      </NavBtnWrapper>
    </NavWrapper>
  );
};

export default Navbar;
