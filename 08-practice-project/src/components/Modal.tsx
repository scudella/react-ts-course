import { type ReactNode, useEffect, useRef, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      setModalOpen(false);
    }
  };

  return (
    <dialog ref={modalRef} className='modal' onKeyDown={handleKeyDown}>
      {children}
    </dialog>
  );
};
export default Modal;
