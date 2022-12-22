import React from "react";
import { StickyItem, LeftStickyBarWrapper, StickyLine } from "./style";
import { socialData } from "../footer/socialData";

const LeftStickyBar = () => {
  const data = socialData.slice(0, 2);

  return (
    <LeftStickyBarWrapper>
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
    </LeftStickyBarWrapper>
  );
};

export default LeftStickyBar;
