import { useState, useCallback } from "react";
import styled from "styled-components";
import { request } from "./utils";
import Ripples from "react-ripples";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Form = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") ?? "");
  const [number, setNumber] = useState("");

  const onSubmitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      const { resultCode } = await request(`${BASE_URL}/api/keyboard`, "post", { email, number });
      if (resultCode === "100") localStorage.setItem("email", email);
    },
    [email, number],
  );

  const onDeleteHandler = useCallback(() => {
    request(`${BASE_URL}/api/keyboard`, "delete", { data: { email, number } });
  }, [email, number]);

  const onInquiryHandler = useCallback(async () => {
    const { resultCode, data } = await request(`${BASE_URL}/api/keyboard?email=${email}`);
    if (resultCode === "100") console.log(resultCode, data);
  }, [email]);

  const onChangeEmail = useCallback(({ target }) => setEmail(target.value), []);
  const onChangeNumber = useCallback(({ target }) => setNumber(target.value), []);

  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <input type="email" placeholder="메일 주소" value={email} onChange={onChangeEmail} />
      <input type="number" placeholder="제품 번호" value={number} onChange={onChangeNumber} />
      <ButtonWrapper>
        <Ripples color="rgba(255, 255, 255, 0.2)" during={1400}>
          <button type="submit">등록</button>
        </Ripples>
        <Ripples color="rgba(255, 255, 255, 0.2)" during={1400}>
          <button type="button" onClick={onDeleteHandler}>
            삭제
          </button>
        </Ripples>
        <Ripples color="rgba(255, 255, 255, 0.2)" during={1800}>
          <button type="button" onClick={onInquiryHandler}>
            등록 목록 조회
          </button>
        </Ripples>
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
  flex-wrap: wrap;

  .react-ripples {
    width: calc(50% - 6px);

    :last-child {
      flex-grow: 2;
      margin-top: 12px;
    }
  }

  button {
    border-radius: 10px;
    border: none;
    outline: none;
    width: 100%;
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
