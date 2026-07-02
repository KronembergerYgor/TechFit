import { type ReactNode } from 'react';

interface Props {
  idModal: string;
  titleModal?: string;
  bodyModal?: ReactNode;
  footerModal?: ReactNode;

}


function Modal({idModal, bodyModal, titleModal, footerModal}: Props) {
  return <>
    <div style={{ zIndex: 1060 }} className="modal fade" id={idModal} tabIndex={-1} aria-labelledby={idModal + "Label"} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={idModal + "Label"}>{titleModal}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {bodyModal}
          </div>
          <div className="modal-footer">
            {footerModal}
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Modal;