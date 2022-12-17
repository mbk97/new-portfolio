import React, { MutableRefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ComponentMargin, SectionNum } from "../../globalStyle/GlobalStyle";
import { Form, FormInput, FormWrapper, MessageBox } from "./style";
import CutsomButton from "../common/button/CutsomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TitleContainer } from "../about/style";
import { CustomHeader, CustomText } from "../common/text/CustomText";
import { EmailLink } from "../stickySocials/style";

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  // const [disable, setDisabled] = useState(false);

  // if (!form.current) {
  //   setDisabled(true);
  // }

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3bkmvve",
        "template_12g826a",
        form.current,
        "lLqU1RqD1lWnyH6QP"
      )
      .then(
        (result) => {
          toast.success("Message sent");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <ComponentMargin />
      <TitleContainer>
        <CustomHeader>
          <SectionNum>02.</SectionNum>
          Get in touch
        </CustomHeader>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <CustomText>
            You can reach out to me by sending a mail message, <br /> i will get
            back to you as soon as possible.
          </CustomText>
        </div>
        <CutsomButton>
          <EmailLink href="mailto:oyindamola850@gmail.com">
            Send message
          </EmailLink>
        </CutsomButton>
      </TitleContainer>
      {/* <FormWrapper>
        <Form ref={form} onSubmit={sendEmail}>
          <FormInput type="text" placeholder="Name" name="name" />
          <FormInput type="email" placeholder="Email" name="email" />
          <MessageBox placeholder="Enter your message" name="message" />
          <CutsomButton>Send message</CutsomButton>
        </Form>
      </FormWrapper> */}
    </React.Fragment>
  );
};

export default Contact;
