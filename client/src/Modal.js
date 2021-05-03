import { useEffect, useState, useContext, useCallback } from "react";
import { ModalContext } from "./ModalContext";
import styled from "styled-components";
import Ripples from "react-ripples";

const Modal = () => {
  const { isOpen, modalContent, closeModal } = useContext(ModalContext);
  const [className, setClassName] = useState("show");

  const onCloseHandler = useCallback(() => {
    setClassName("close");
    setTimeout(() => {
      closeModal();
    }, 500);
  }, [closeModal]);

  useEffect(() => {
    setClassName("show");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <Outter className={className} onClick={onCloseHandler} />
          <ModalWrapper className={className}>
            <ModalContent>{modalContent}</ModalContent>
            <Ripples color="rgba(255, 255, 255, 0.2)" during={1200}>
              <button type="button" onClick={onCloseHandler}>
                닫기
              </button>
            </Ripples>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

const Outter = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0);
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: hidden;

  &.show {
    animation-name: outterShowAnim;
    @keyframes outterShowAnim {
      0% {
        background-color: rgba(0, 0, 0, 0);
      }
      100% {
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  &.close {
    animation-name: outterCloseAnim;
    @keyframes outterCloseAnim {
      0% {
        background-color: rgba(0, 0, 0, 0.4);
      }
      100% {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  min-height: 150px;
  background-color: #fff;
  border-radius: 12px;
  z-index: 101;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translate(-50%, -50%) scale(0.3);
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: hidden;

  &.show {
    animation-name: modalShowAnim;
    @keyframes modalShowAnim {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.3);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  &.close {
    animation-name: modalCloseAnim;
    @keyframes modalCloseAnim {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.3);
      }
    }
  }

  .react-ripples {
    position: absolute !important;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    width: 80px;
    height: 35px;

    button {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      background-color: #3182f6;
      color: #fff;
      font-size: 15px;
      transition: 0.3s;
      box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;
      cursor: pointer;

      :hover {
        background-color: #1c64da;
      }
    }
  }
`;

const ModalContent = styled.div`
  color: #222;
  padding-bottom: 40px;
`;

export default Modal;
