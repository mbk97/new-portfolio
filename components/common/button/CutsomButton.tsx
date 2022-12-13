import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  secondary?: boolean;
  disabled?: boolean;
}

const Button = styled.button.attrs((props: IProps) => ({
  secondary: props.secondary,
}))`
  background: ${(props) => (props.secondary ? "transparent" : "#27ae60")};
  width: 143px;
  height: 42px;
  border: ${(props) => (props.secondary ? "1px solid #F2F2F2" : "0px")};
  color: ${(props) => (props.secondary ? "#FFFFFF" : "#FFFFFF")};
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 20px;
  cursor: pointer;
`;

const CutsomButton = ({ children, secondary, disabled }: IProps) => {
  return (
    <Button
      secondary={secondary}
      disabled={disabled}
      style={{
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? "0.6" : "1",
      }}
    >
      {children}
    </Button>
  );
};

export default CutsomButton;
