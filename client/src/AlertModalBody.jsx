import { useModal } from "react-simple-modal-provider";
import styled from "styled-components";
import Ripples from "react-ripples";

export default function AlertModalBody({ onClose }) {
  const { message, data } = useModal("AlertModal");

  return (
    <ModalWrapper>
      <ModalContentWrapper>
        {message}
        {data && (
          <ul>
            {data.map(({ number }, idx) => {
              return (
                <li key={idx}>
                  <a href={process.env.REACT_APP_TARGET_BASE_URL + number} target="_blank" rel="noreferrer">
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </ModalContentWrapper>
      <Ripples color="rgba(255, 255, 255, 0.2)" during={1200}>
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </Ripples>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  min-width: 300px;
  min-height: 110px;
  background-color: #fff;
  border-radius: 12px;
  z-index: 101;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .react-ripples {
    position: absolute !important;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    width: 80px;
    height: 35px;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;

    button {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      background-color: #3182f6;
      color: #fff;
      font-size: 15px;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        background-color: #1c64da;
      }
    }
  }

  ul > li {
    margin: 5px 0;
  }
`;

const ModalContentWrapper = styled.div`
  color: #222;
  padding-bottom: 40px;
`;
