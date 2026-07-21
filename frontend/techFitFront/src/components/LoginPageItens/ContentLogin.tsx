import React from 'react';
import { useParams } from 'react-router-dom'

import imgIlustratorLogin from '../../assets/IlustraçãoTelaLogin.png';
import LogoCompleta from '../../assets/LogoCompleta.png';
import HeaderForms from '../header/HeaderForms';

import TitlePageForm from '../TitlePageForm';
import FormLogin from './FormLogin';
import DivisorForm from '../DivisorForm';
import RegisterLink from './RegisterLink';



function ContentLogin() {
  const { typeParam } = useParams()

  return <>
    <div className="container-login-geral">

      <div className="contentFormLogin" >

          <HeaderForms classNameTextHeader='header-container header-container-login' imgLogo={LogoCompleta} classNameTextImg="logoMenuLogin" urlProfessores="/login/professor" urlAlunos="/login/aluno" />
          <TitlePageForm titleForm="LOGIN" typeParam={typeParam} subtitleForm="Realize login a sua conta para continuar"/>
          <FormLogin />
          <DivisorForm classNameText="containerDivisor" />
          <RegisterLink />

      
      </div>
  
      <img className='loginMenuIlustrator' src={imgIlustratorLogin} alt="" />
    
    </div>
  </>;

  
}

export default ContentLogin;