import React from 'react';
import Button from '../Button';
import InputForm from '../InputForm';

function FormLogin() {
  return <>
    <div className="inputsDiv" >
      <InputForm labelTitle="E-mail" typeInput="email" placeholderInput="Digite seu E-mail" idInput="emailLogin"/>
      <InputForm labelTitle="Senha" typeInput="password" placeholderInput="Digite sua senha" idInput="passwordLogin"/>
      <a href="#" >Esqueceu sua senha?</a>
    </div>

    <div className="fieldButtonEnter" >
      <Button classNameText="buttonEnterLogin" title="Entrar" />
    </div>
  </>;

  
}

export default FormLogin;