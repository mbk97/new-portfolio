import React from "react";
import { socialData } from "../footer/socialData";
import {
  RightItems,
  StickyItem,
  RightStickyBarWrapper,
  StickyLine,
  EmailLink,
} from "./style";

const RightStickyBar = () => {
  const data = socialData.slice(2, 4);

  return (
    <RightStickyBarWrapper>
      <>
        {data.map((item) => {
          const { id, linkTo, Icon } = item;
          return (
            <StickyItem key={id}>
              <a href={linkTo} target="_blank" rel="noreferrer">
                <Icon size={30} />
              </a>
            </StickyItem>
          );
        })}
      </>
      <StickyLine />
    </RightStickyBarWrapper>
  );
};

export default RightStickyBar;
