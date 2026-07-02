import React from 'react';
import TitleSmall from './TitleSmall';
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import Card from "../Card";
import ImgSobreNos from '../../assets/ImgSobreNos.png';
import '../../styles/body/FourthSession.css';
import Button from '../Button';
import { MdEmail, MdMessage } from "react-icons/md";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";

import LineCardFourth from '../LineCardFourth'






const min = 1;
const max = 1000;

function randomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function FourthSession() {
 
 return <>
    <div className="containerFourth" id="contatos">

      <div className="row" >

        <div className="col-7 cardBox">
          <h1 className="titleCard text-center">Entre em Contato</h1>
          <hr className="lineTitle border-warning opacity-100"/>

          <p>Estamos prontos para ajudar sua empresa a evoluir com tecnologia, saúde e performance.</p>
          <p>Preencha o formulário abaixo e nossa equipe entrará em contato</p>

          <div className="mb-3">

            <div className="row">

              <div className="col input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FaUser /></span>
                <input type="text" className="form-control" placeholder="Digite seu nome" aria-label="name" aria-describedby="basic-addon1" />
              </div>

              <div className="col input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><MdEmail /></span>
                <input type="email" className="form-control" placeholder="Endereço de e-mail" aria-label="email" aria-describedby="basic-addon1" />
              </div>

            </div>

            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FaPhoneAlt /></span>
                <input type="number" className="col-9 form-control" placeholder="Digiete seu telefone - Ex: 21900000000" aria-label="name" aria-describedby="basic-addon1" />
              </div>

            </div>

            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><MdMessage /></span>
                <textarea className="form-control" placeholder="Deixe sua mensagem para empresa" id="floatingTextarea"></textarea>
              </div>
            </div>  
           

            <Button classNameText="buttonContact" title=" Enviar" icon={<IoIosSend />} subTitleBtn="Encontre seu personal"/>

            

            </div>

        </div>

        <div className="col-4 cardBox">
          
          <h4 className="titleCard text-center">Informação Contato</h4>
          <hr className="lineTitle border-warning opacity-100"/>

          <p>Fale com nossa equipe e descubra como podemos transformar resultados através da tecnologia e da saúde</p>

          <div className="row">
            <LineCardFourth text="(21) 90000-0000" title="Telefone" icon={<FaPhoneAlt style={{ color: '#db8300', fontSize: '18px' }} />} />
            <LineCardFourth text="teste@teste.com" title="Email" icon={<MdEmail  style={{ color: '#db8300', fontSize: '18px' }} />} />
          </div>


          <div 
              // 💡 d-flex coloca ícone e textos lado a lado; align-items-center alinha verticalmente pelo meio
              // 💡 p-3 adiciona o espaçamento interno correto; gap-3 afasta o ícone do texto de forma ideal
              className="d-flex align-items-center p-3 gap-3 bg-white" 
              style={{
                border: "1px solid #e2e8f0", 
                borderRadius: "16px", // 🎯 Bordas bem arredondadas como na imagem
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)", // 🎯 Sombra suave e moderna, sem aquele aspecto pesado
                maxWidth: "450px" // Ajuste o tamanho máximo para caber bem no seu layout
              }}
            >
              {/* 🛡️ Ícone de Segurança */}
              <FaShieldAlt 
                style={{ 
                  fontSize: "36px", 
                  color: '#db8300', 
                  flexShrink: 0 // Garante que o ícone nunca esmague se a tela encolher
                }} 
              /> 

              {/* 📝 Bloco de Textos alinhados em coluna */}
              <div className="d-flex flex-column">
                <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.9rem', letterSpacing: '-0.3px' }}>
                  Segurança e Confidencialidade
                </h6>
                <p className="text-muted m-0" style={{ fontSize: '0.8rem', lineHeight: '1.3' }}>
                  Seus dados estão protegidos e utilizados apenas para fins de contato.
                </p>
              </div>

            </div>



        
        </div>



      </div>

      
      


    </div>
  </>
}

export default FourthSession;