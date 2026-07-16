import React from 'react';
import '../styles/LoginPage.css'

import Menu from '../components/header/titulo/Menu';
import imgIlustratorLogin from '../assets/IlustraçãoTelaLogin.png';
import LogoCompleta from '../assets/LogoCompleta.png';
import Button from '../components/Button';
import TitleModalRegister from '../components/TitleModalRegister';
import BodyModalRegisters from '../components/BodyModalRegisters';
import Modal from '../components/Modal';

import { useParams } from 'react-router-dom'




function LoginPage() {

  const { typeLogin } = useParams()

  return (
    <>

      <div data-aos="fade-up" data-aos-delay="200">

        <div style={{padding: '2rem', marginTop: "4rem"}}>

          <div style={{display: 'flex', justifyContent: "center"}}>

            <div style={{width: "35%", border: '1px solid #00000046', borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem", boxShadow: '17px 7px 11px #000'}}>

              <header className="header-container">

                <a href="/"><img className='logoMenu' src={LogoCompleta} alt="Logo" width="175vw" style={{float: "left", marginRight: "4rem"}}/></a>

                <ul className="nav-container" style={{justifyContent: "end"}}>            
                  
                  <Menu name="HOME" url="/"/>
                  <Menu name="ALUNOS" url="/login/aluno"/>
                  <Menu name="PROFESSORES" url="/login/professor"/>
                </ul>
              </header>


              <div className='text-center' style={{padding: '1rem'}}>
                <h1 style={{textShadow: '1px 1px 2px #000'}}>LOGIN <span className='tecFitName'>{typeLogin?.toUpperCase()}</span></h1>
                <p className='fs-6 text card-subtitle mb-5 text-muted'>Realize login a sua conta para continuar</p>


                <div style={{display: "block"}}>


                  
                  <div style={{width: "75%", margin:"1.5rem auto"}} >
                    <label className="mb-1" style={{float: "left"}}><strong>E-mail</strong></label>
                    <input type="email" className="mb-3 form-control" placeholder="Digite seu E-mail" aria-label="email"  />

                    <label className="mb-1" style={{float: "left"}}><strong>Senha</strong></label>
                    <input type="email" className="mb-3 form-control" placeholder="Digite sua senha" aria-label="email"  />

                    <a href="" style={{float: "right", color: "rgb(219, 131, 0)"}}>Esqueceu sua senha?</a>
                  </div>
                  
                </div>

              </div>

              <div style={{width: "75%", margin:"1.5rem auto"}} >

                <Button classNameText="buttonEnterLogin" title="Entrar" />

              </div>

              <div style={{width: "75%", margin:"1.5rem auto"}} >
              
                <div className="d-flex align-items-center my-4">
                  <hr className="flex-grow-1" />
                  <span className="mx-3 text-muted">ou</span>
                  <hr className="flex-grow-1" />
                </div>

              </div>

              <div style={{width: "75%", margin:"1.5rem auto", textAlign: "center"}} >
                  <span>Não tem conta? <strong> <a data-bs-toggle="modal" data-bs-target="#modalCadastro" href="#" style={{ color: "rgb(219, 131, 0)"}}> Cadastre-se?</a></strong></span>
              </div>

              <Modal idModal="modalCadastro" titleModal={<TitleModalRegister />} bodyModal={<BodyModalRegisters />} />

            </div>
          
            <div>
              <img style={{borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem", boxShadow: '5px 7px 11px #000'}} src={imgIlustratorLogin} alt="" />
            </div>

          </div>

        </div>
        
      </div>




   



    
    </>
  )
}

export default LoginPage;