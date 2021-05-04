import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Form from "./Form";
import Modal from "./Modal";
import { ModalProvider } from "./ModalContext";

import keyboardImgSrc from "./asset/keyboard.png";

const App = () => {
  return (
    <ModalProvider>
      <GlobalStyles />
      <Modal />
      <Content>
        <img src={keyboardImgSrc} alt="키보드" />
        <Form />
      </Content>
      <Footer>
        <a href="https://github.com/seungdeng17/sold-out-keyboard" target="_blank" rel="noreferrer">
          README
        </a>
      </Footer>
    </ModalProvider>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -100px;

  img {
    width: 320px;
    margin-bottom: 20px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  a {
    font-size: 14px;
    text-decoration: none;
    color: #95a5a6;
  }
`;

export default App;
