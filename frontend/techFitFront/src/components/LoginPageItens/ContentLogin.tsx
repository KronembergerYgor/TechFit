import React, {useEffect, useState}from 'react';
import { useParams } from 'react-router-dom'

import imgIlustratorLogin from '../../assets/IlustraçãoTelaLogin.png';
import LogoCompleta from '../../assets/LogoCompleta.png';
import HeaderForms from '../header/HeaderForms';

import TitlePageForm from '../TitlePageForm';
import FormLogin from './FormLogin';
import DivisorForm from '../DivisorForm';
import RegisterLink from './RegisterLink';

import type { Role } from '../../types/Role'; // ✅ import só de tipo
import { apiGet } from '../../services/api';



function ContentLogin() {

  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiGet<Role[]>('/roles')
      .then(setRoles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const { typeParam } = useParams()
  // console.log(Number(typeParam));

  const roleAluno     = roles.find(role => role.id === Number(typeParam));

  // Trata os três estados possíveis: carregando, erro, e "não achou"
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar: {error}</p>;
  }

  if (!roleAluno) {
    return <p>Role não encontrada.</p>;
  }

  const textRoleAluno = roleAluno.name.toUpperCase(); 

  return <>
    <div className="container-login-geral">

      <div className="contentFormLogin" >

          <HeaderForms classNameTextHeader='header-container header-container-login' imgLogo={LogoCompleta} classNameTextImg="logoMenuLogin" typePageMenu="login" />
          <TitlePageForm titleForm="LOGIN" typeParam={textRoleAluno} subtitleForm="Realize login a sua conta para continuar"/>
          <FormLogin />
          <DivisorForm classNameText="containerDivisor" />
          <RegisterLink />

      
      </div>
  
      <img className='loginMenuIlustrator' src={imgIlustratorLogin} alt="" />
    
    </div>
  </>;

  
}

export default ContentLogin;