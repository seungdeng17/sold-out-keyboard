import { useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const emailRef = useRef();
  const keyboardNumberRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const number = keyboardNumberRef.current.value;
    try {
      const response = await axios.post(`${BASE_URL}/api/keyboard`, { email, number });
      alert(response.data.message);
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  const onDeleteHandler = async () => {
    const email = emailRef.current.value;
    const number = keyboardNumberRef.current.value;
    try {
      const response = await axios.delete(`${BASE_URL}/api/keyboard`, { data: { email, number } });
      alert(response.data.message);
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <input type="email" ref={emailRef} placeholder="메일 주소" />
      <input type="number" ref={keyboardNumberRef} placeholder="제품 번호" />
      <ButtonWrapper>
        <button type="submit">등록</button>
        <button type="button" onClick={onDeleteHandler}>
          삭제
        </button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  input {
    width: 400px;
    height: 53.5px;
    border-radius: 10px;
    border: 3.5px solid transparent;
    outline: none;
    display: block;
    margin-bottom: 12px;
    text-indent: 16px;
    color: #2f3542;
    font-size: 15px;
    box-sizing: border-box;
    transition: 0.3s;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;

    :hover {
      border-color: #74b9ff;
    }

    :focus {
      border-color: #0984e3;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
  width: 400px;
  display: flex;
  justify-content: space-between;

  button {
    border-radius: 10px;
    border: none;
    outline: none;
    width: calc(50% - 6px);
    height: 50px;
    cursor: pointer;
    background-color: #3182f6;
    color: #fff;
    font-size: 15px;
    transition: 0.3s;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;

    :hover {
      background-color: #1c64da;
    }
  }
`;

export default Form;
