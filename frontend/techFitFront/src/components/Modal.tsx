import { type ReactNode } from 'react';
import { FaShieldAlt } from "react-icons/fa";

interface Props {
  idModal: string;
  titleModal?: ReactNode;
  bodyModal?: ReactNode;
}

function Modal({ idModal, bodyModal, titleModal }: Props) {
  return (
    <div style={{ zIndex: 1060 }} className="modal fade" id={idModal} tabIndex={-1} aria-labelledby={idModal + "Label"} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header justify-content-center position-relative">
            {titleModal}
            <button
              type="button"
              className="btn-close position-absolute"
              style={{ right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {bodyModal}
          </div>

          <div className="modal-footer d-flex justify-content-center">
            <FaShieldAlt style={{ color: '#db8300', flexShrink: 0, margin: "0.5rem" }} />
            <p className='fs-6 text card-subtitle mb-2 text-muted'>Ambiente seguro e confiável</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;