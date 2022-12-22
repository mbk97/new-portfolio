import React from "react";
import { socialData } from "../footer/socialData";
import { StickyItem, RightStickyBarWrapper, StickyLine } from "./style";

const RightStickyBar = () => {
  const data = socialData.slice(2, 4);

  return (
    <RightStickyBarWrapper>
      <>
        {data.map((item) => {
          const { id, linkTo, Icon } = item;
          return (
            <StickyItem key={id}>
              <a
                href={linkTo}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#27ae60",
                }}
              >
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
