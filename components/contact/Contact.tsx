import React from "react";
import { ComponentMargin, SectionNum } from "../../globalStyle/GlobalStyle";
import { ContactTextWrapper } from "./style";
import CutsomButton from "../common/button/CutsomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TitleContainer } from "../about/style";
import { CustomHeader, CustomText } from "../common/text/CustomText";
import { EmailLink } from "../stickySocials/style";
import { HeaderTextThree } from "../header/style";

const Contact = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <ComponentMargin />
      <TitleContainer id="contact">
        <HeaderTextThree>Get in touch</HeaderTextThree>
        <ContactTextWrapper>
          <CustomText>
            You can reach out to me by sending a mail message, i will get back
            to you as soon as possible.
          </CustomText>
        </ContactTextWrapper>
        <CutsomButton>
          <EmailLink href="mailto:oyindamola850@gmail.com">
            Send message
          </EmailLink>
        </CutsomButton>
      </TitleContainer>
    </React.Fragment>
  );
};

export default Contact;
