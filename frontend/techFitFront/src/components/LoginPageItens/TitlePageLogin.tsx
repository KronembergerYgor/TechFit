import React from 'react';
interface Props {
  typeLogin: string | undefined;
}

function TitlePageLogin({typeLogin}: Props) {
  return <>
     <div className='titleFormLogin'>
        <h1>LOGIN <span className='tecFitName'>{typeLogin?.toUpperCase()}</span></h1>
        <p className='fs-6 text card-subtitle mb-5 text-muted'>Realize login a sua conta para continuar</p>
      </div>
  </>;

  
}

export default TitlePageLogin;