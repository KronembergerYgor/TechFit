import React from 'react';
// import '../../styles/body/SecondSession.css';
import TitleSmall from './TitleSmall';
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import Card from "../Card";
import ImgSobreNos from '../../assets/ImgSobreNos.png';
import '../../styles/body/ThirdSession.css';



const min = 1;
const max = 1000;

function randomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ThirdSession() {
 
 return <>
    <div className="containerThird">
      
        <div style={{ padding: '2rem', display: 'flex', gap: '4rem', alignItems: 'flex-start', color:'#fff' , justifyContent: 'space-between'}}>
          
          <img style={{opacity: '0.8', width: '50%', height: 'auto', borderRadius: '8px', objectFit: 'cover'}} src={ImgSobreNos} alt="imagem ilustrativa para área 'Sobre nós' " />

          <div style={{textAlign: "start", overflowWrap: 'break-word', wordBreak: 'break-word', margin: 'auto', fontSize: '19px' }}>
              <h3 style={{color: "#db8300"}}>Sobre Nós</h3>
              <h2>Conectamos pessoas, tecnologia e <span style={{color: "#db8300"}}>resultados</span></h2>

              <p>A TechFit nasceu com o propósito de transformar a forma como os alunos e profissionais do fitness se conectam</p>
              <p>Nossa plataforma reúne em um único ambiente ferramentas inteligentes para gestão de treinos, acompanhamento de evolução, agendamentos, pagamentos e comunicação.</p>
              <p>Para alunos oferecemos uma experiência completa para encontrar profissionais qualificados e acompanhar sua jornada e evolução. Para profissionais, disponibilizamos recursos que ajudam a organizar a rotina, aumentar a produtividade e escalar o negócio</p>

              <p style={{color: "#db8300"}}>Mais do que uma plataforma, somos um ecossistama criado para impulssionar resultados através da tecnologia.</p>

              <hr />

          </div>
        
        </div>

    </div>
  </>
}

export default ThirdSession;