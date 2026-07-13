import { type ReactNode } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

function BodyModalRegisters(): ReactNode {
  return (
    <>
      <p className='fs-6 text card-subtitle mb-2 text-muted text-center'>Selecione seu perfil para continuar</p>
      <div className="bodyModalRegister container-fluid">
        

        {/* Container dos cards */}
        <div className="cards-container">

          {/* Card Aluno */}
          <a href="#" className="card-register card-black text-decoration-none">
            <div className="card-icon-wrapper">
              <FaUserGraduate size={30} />
            </div>
            <h3 className="card-title">Sou Aluno</h3>
            <p className="card-desc">Quero aprender e alcançar meus objetivos</p>
            <div className="card-arrow-btn">
              <FaArrowRight size={16} />
            </div>
          </a>

          {/* Card Professor */}
          <a href="#" className="card-register card-orange text-decoration-none">
            <div className="card-icon-wrapper">
              <FaChalkboardTeacher size={30} />
            </div>
            <h3 className="card-title">Sou Professor</h3>
            <p className="card-desc">Quero ensinar e transformar vidas</p>
            <div className="card-arrow-btn">
              <FaArrowRight size={16} />
            </div>
          </a>

        </div>

      </div>
    
    </>
     
  );
}

export default BodyModalRegisters;