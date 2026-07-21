import { type ReactNode } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import CardModal from './CardModal'

function BodyModalRegisters(): ReactNode {
  return (
    <>
      <p className='fs-6 text card-subtitle mb-2 text-muted text-center'>Selecione seu perfil para continuar</p>
      <div className="bodyModalRegister container-fluid">
        

        {/* Container dos cards */}
        <div className="cards-container">

          {/* Card Aluno */}
          <CardModal cardTypeStyle="card-black" icon={<FaUserGraduate size={30} />} hrefUrl="/Register/aluno" titleCard="Sou Aluno" description="Quero aprender e alcançar meus objetivos"/>  
          
          {/* Card Professor */}
          <CardModal cardTypeStyle="card-orange" icon={<FaChalkboardTeacher size={30} />} hrefUrl="/Register/professor" titleCard="Sou Professor" description="Quero ensinar e transformar vidas"/>  
        
        </div>
         

      </div>
    
    </>
     
  );
}

export default BodyModalRegisters;