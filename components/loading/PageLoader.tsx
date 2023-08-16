import React from "react";
import { PageLoaderContainer } from "./style";
import { LogoText } from "../navbar/style";
import { Typewriter } from "react-simple-typewriter";

const PageLoader = () => {
  return (
    <PageLoaderContainer>
      <LogoText>
        <Typewriter
          words={["Mubarak", " Code Compiling..."]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </LogoText>
    </PageLoaderContainer>
  );
};

export default PageLoader;
