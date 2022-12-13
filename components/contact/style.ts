import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  /* background-color: #212121; */
  height: 400px;
  padding: 20px;
`;

export const FormInput = styled.input`
  border: 1px solid #4f4f4f;
  height: 45px;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  background: transparent;
  padding: 10px;
  color: white;
  outline-color: #4f4f4f;

  &::placeholder {
    color: #4f4f4f;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const MessageBox = styled.textarea`
  width: 100%;
  height: 109px;
  border: 1px solid #4f4f4f;
  background: transparent;
  resize: none;
  padding: 10px;
  font-size: 20px;
  color: white;
  outline-color: #4f4f4f;

  &::placeholder {
    color: #4f4f4f;
  }
`;
