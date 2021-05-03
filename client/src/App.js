import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Form from "./Form";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Content>
        <Form />
      </Content>
      <Footer>
        <a href="https://github.com/seungdeng17/sold-out-keyboard" target="_blank" rel="noreferrer">
          README
        </a>
      </Footer>
    </>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 14px;
    text-decoration: none;
    color: #95a5a6;
  }
`;

export default App;
