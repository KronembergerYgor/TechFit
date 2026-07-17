import React from 'react';
import { useParams } from 'react-router-dom'

import imgIlustratorLogin from '../../assets/IlustraçãoTelaLogin.png';
import LogoCompleta from '../../assets/LogoCompleta.png';
import HeaderLogin from '../header/HeaderLogin';

import TitlePageLogin from './TitlePageLogin';
import FormLogin from './FormLogin';
import DivisorFormLogin from './DivisorFormLogin';
import RegisterLink from './RegisterLink';



function ContentLogin() {
  const { typeLogin } = useParams()

  return <>
    <div className="container-login-geral">

      <div className="contentFormLogin" >

          <HeaderLogin imgLogo={LogoCompleta} />
          <TitlePageLogin typeLogin={typeLogin} />
          <FormLogin />
          <DivisorFormLogin />
          <RegisterLink />

      
      </div>
  
      <img className='loginMenuIlustrator' src={imgIlustratorLogin} alt="" />
    
    </div>
  </>;

  
}

export default ContentLogin;