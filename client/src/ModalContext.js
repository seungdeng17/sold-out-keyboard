import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalContent,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
