import { type ReactNode } from 'react';
import logo from '../assets/LogoCompleta.png';
import { FaShieldAlt } from "react-icons/fa";


interface Props {
  idModal: string;
  titleModal?: ReactNode;
  bodyModal?: ReactNode;
  footerModal?: ReactNode;

}


function Modal({idModal, bodyModal, titleModal, footerModal}: Props) {
  return <>
    <div style={{ zIndex: 1060 }} className="modal fade" id={idModal} tabIndex={-1} aria-labelledby={idModal + "Label"} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">

          {/* 📦 Envelopamos as duas em um container único */}
          <div>
            <div className="mb-2 d-flex justify-content-center"> {/* mb-2 adiciona uma margemzinha inferior abaixo da logo */}
              <img src={logo} alt="" width={150}/>
            </div>

            <div>
              <h5 className="modal-title" id={idModal + "Label"}>{titleModal}</h5>
            </div>
          </div>

          {/* O botão de fechar continua isolado, ficando perfeitamente alinhado na direita */}
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>


          <div className="modal-body">
            {bodyModal}
          </div>
          <div className="modal-footer d-flex justify-content-center">
           <FaShieldAlt style={{color: '#db8300', flexShrink: 0, margin:"0.5rem"}} />
            <p className='fs-6 text card-subtitle mb-2 text-muted'>Ambiente seguro e confiável</p>
            
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Modal;