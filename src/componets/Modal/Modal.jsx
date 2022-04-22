import React, { useContext, useState } from 'react';

import './modal.css';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

export const Modal = (props) => {
  const { children } = props;
  const { closeModal } = useContext(ModalContext);

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    const closeTimeout = setTimeout(() => {
      closeModal();
      clearTimeout(closeTimeout);
    }, 300);
  };

  const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

  return (
    <div className={backdropClasses} onClick={handleClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
