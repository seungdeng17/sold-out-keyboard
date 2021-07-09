import Modal, { useModalState, modalAnimation } from "react-simple-modal-provider";
import AlertModalBody from "./AlertModalBody";

export default function AlertModal({ children }) {
  const [isOpen, setOpen] = useModalState();
  const onClose = () => setOpen(false);

  return (
    <Modal id="AlertModal" consumer={children} isOpen={isOpen} setOpen={setOpen} animation={modalAnimation.slideDown} duration={200}>
      <AlertModalBody onClose={onClose} />
    </Modal>
  );
}
