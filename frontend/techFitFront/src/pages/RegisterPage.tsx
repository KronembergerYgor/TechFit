import React from 'react';
import { useParams } from 'react-router-dom'


import '../styles/LoginPage.css'
import HeaderForms from '../components/header/HeaderForms';
import LogoCompleta from '../assets/LogoCompleta.png';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import DivisorForm from '../components/DivisorForm';



import TitlePageForm from '../components/TitlePageForm';


function RegisterPage() {
    const { typeParam } = useParams()
  
  return (
    <>
        
         <HeaderForms 
            classNameTextHeader="header-container header-container-login p-5 mb-4 border-bottom" 
            imgLogo={LogoCompleta} 
            widthImg={200} 
            urlProfessores="/Register/professor" 
            urlAlunos="/Register/aluno" 
          />

      <div data-aos="fade-up" data-aos-delay="200">

          <TitlePageForm titleForm="CADASTRO DE " typeParam={typeParam} subtitleForm="Crie sua conta para começar" />
          
          

          <div className="inputsDivRegister" >
            <InputForm labelTitle="Nome Completo" typeInput="text" placeholderInput="Digite seu nome completo" idInput="nameRegister"/>
            <InputForm labelTitle="E-mail" typeInput="email" placeholderInput="Digite seu E-mail" idInput="emailRegister"/>         
            <InputForm labelTitle="Senha" typeInput="password" placeholderInput="Digite sua senha" idInput="passwordRegister"/>         
            <InputForm labelTitle="Confirme Senha" typeInput="password" placeholderInput="Confirme sua senha" idInput="confirmPasswordRegister"/>         

            <Button classNameText="buttonRegisterPage" title="Cadastrar" />            
                        
            <DivisorForm/>
            <div className='text-center mb-4'>

              <span>Já tem conta? <a href={"/login/" + typeParam} >Entre aqui</a></span>

            </div>

            
          </div>



          



        





















      </div>
        

    </>
  )
}

export default RegisterPage;