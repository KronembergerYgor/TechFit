import React from 'react';

import '../styles/LoginPage.css'
import ContentLogin from '../components/LoginPageItens/ContentLogin';
import Modal from '../components/Modal';
import TitleModalRegister from '../components/TitleModalRegister';
import BodyModalRegisters from '../components/BodyModalRegisters';


function LoginPage() {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="200">
        <ContentLogin />       
      </div>
        <Modal idModal="modalCadastro" titleModal={<TitleModalRegister />} bodyModal={<BodyModalRegisters />} />

    </>
  )
}

export default LoginPage;