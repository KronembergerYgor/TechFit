import { type ReactNode } from 'react';

interface Props {
  fadeOut: boolean;
  titleModal: string;
  subTitle: string;
  icon?: ReactNode;
}

function ModalWarning({ fadeOut, titleModal, subTitle, icon}: Props) {
  return (
    <div className="success-modal-overlay">
        <div className={`success-modal ${fadeOut ? 'success-modal-fade-out' : ''}`}>
          <div className="success-modal-icon">
            {icon}
          </div>

          <h2 className="success-modal-title">{titleModal}</h2>
            <p className="success-modal-subtitle">{subTitle}</p>
        </div>
      </div>
  );
}

export default ModalWarning;