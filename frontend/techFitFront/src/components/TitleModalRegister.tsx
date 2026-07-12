import { type ReactNode } from 'react';


function TitleModalRegister() {
  return <>
  <div style={{textAlign: 'center'}}>
    <h2>
        Deseja se cadastrar como <span style={{color: "#db8300"}}>Aluno</span> ou <span style={{color: "#db8300"}}>Profissional</span> ?
    </h2>
      <p className='fs-6 text card-subtitle mb-2 text-muted'>Selecione seu perfil para continuar</p>

  </div>
      
  </>;
}

export default TitleModalRegister;