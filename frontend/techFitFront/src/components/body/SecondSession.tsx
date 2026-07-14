import {useState} from 'react';
import '../../styles/body/SecondSession.css';
import TitleSmall from './TitleSmall';
import imgInfos from '../../assets/imagemInfos.png';
import { FaWallet, FaClipboardList } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import Card from '../Card';

const min = 1;
const max = 1000;

function randomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SecondSession() {

    const [abaAtiva, setAbaAtiva] = useState('inicio');

    const sizeIcons = 65;
    let infosButtons = [{}];


   switch (abaAtiva) {
    case "alunos":
      infosButtons = [
        {
          id: randomNumber(),
          icone: <FaWallet size={sizeIcons} />,
          titulo: "Gestão e evolução",
          descricao: "Acompanhe treinos, dietas e evolução de cargas através de gráficos interativos e indicadores de desempenho. Tenha uma visão clara do seu progresso e mantenha-se motivado a alcançar resultados cada vez melhores."
        },
        {
          id: randomNumber(),
          icone: <IoBarChart size={sizeIcons} />,
          titulo: "Tudo em um só lugar",
          descricao: "Centralize toda a sua rotina fitness em uma única plataforma. Gerencie treinos, acompanhe sua evolução, organize agendamentos, consulte pagamentos e mantenha contato com seu profissional de forma simples, rápida e organizada."
        },
        {
          id: randomNumber(),
          icone: <LuBrainCircuit size={sizeIcons} />,
          titulo: "Planejamento e inteligência",
          descricao: "Centralize seus objetivos, acompanhe indicadores de desempenho e organize sua rotina com mais eficiência. Com ferramentas inteligentes e informações sempre acessíveis, você toma decisões mais assertivas e mantém sua evolução em constante crescimento."
        },
      ];  



      break;
    case "professores":
      infosButtons = [
        {
          id: randomNumber(),
          icone: <BsCalendar2DateFill size={sizeIcons} />,
          titulo: "Agenda Inteligente",
          descricao: "Organize atendimentos, compromissos e horários de forma prática e eficiente. Gerencie sua agenda em tempo real, evite conflitos de horários e mantenha uma rotina mais produtiva para oferecer a melhor experiência aos seus alunos."
        },
        {
          id: randomNumber(),
          icone: <FaMoneyBillTrendUp size={sizeIcons} />,
          titulo: "Gestão Financeira",
          descricao: "Tenha controle completo sobre seus recebimentos, pagamentos e fluxo financeiro. Acompanhe transações, visualize relatórios detalhados e tome decisões mais estratégicas para o crescimento do seu negócio."
        },
        {
          id: randomNumber(),
          icone: <FaClipboardList size={sizeIcons} />,
          titulo: "Planos de treinos",
          descricao: "Crie, organize e compartilhe planos de treino adaptados às necessidades de cada aluno. Acompanhe a execução das atividades, atualize exercícios com facilidade e ofereça um acompanhamento mais profissional e eficiente."
        },
      ];
      
      break;
    default:
      infosButtons = [{}];
  }

   const styles = {
      iconStyle: {
        fontSize: "5rem", 
        padding: "0", 
        margin: "0", 
        color: "#db8300",
        filter: 'drop-shadow(4px 2px 2px rgba(156, 156, 156, 0.5))',
        textShadow: '2px 2px 5px #ffffff'
      },
      titleStyle: {
        padding: "0", 
        margin: "0"
      },
      styleButton: {
        background: 'none',
        color: '#e18600', 
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center', // Garante a seta centralizada
        gap: '4px',
        fontWeight: '600',
        fontSize: '0.85rem',
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        padding: '4px 12px', // 💡 Um paddingzinho melhora o clique e o visual do botão
        transition: 'transform 0.3s',
        border: 'solid 0.5px #4b4b4b',
        borderRadius: '9px',
        boxShadow: '0px 1px 2px #000'
      }
    };
  
  const descriptrionStyle: React.CSSProperties = {
      overflowWrap: 'break-word', 
      wordBreak: 'break-word',
      margin: '0.5rem 0.5rem 1.5rem', 
      lineHeight: '1.6',
      color: '#fff' // 💡 Removida a cor duplicada antiga
    };




  return <>

    <div className="containerSecond containers">
      
      <div className='tabs-container-session'>
        <h3 className='titleSecondSession'>
          {/* Aba Ativa (Ganha a classe 'active') */}
          <button 
            onClick={() => setAbaAtiva('alunos')} 
            className={`tab-item ${abaAtiva === 'alunos' ? 'active' : ''}`}
          >
            ALUNOS
          </button> 
          
          {/* Divisor central (Ícone) */}
           <button 
            onClick={() => setAbaAtiva('inicio')} 
            className={`tab-item-menu ${abaAtiva === 'inicio' ? 'active' : ''}`}
          >
            <IoGridOutline />
          </button>
          
          {/* Aba Inativa */}
          <button 
            onClick={() => setAbaAtiva('professores')} 
            className={`tab-item ${abaAtiva === 'professores' ? 'active' : ''}`}
          >
            PROFESSORES
          </button>
        </h3>
      </div>


      <div className='containerCards'>

        {abaAtiva === 'inicio' ? (
          
          <div style={{ paddingBottom: '3rem', display: 'flex', alignItems: 'flex-start', color:'#000000' , justifyContent: 'space-between', textAlign: 'start'}}>
            
            <div style={{textAlign: "start", overflowWrap: 'break-word', wordBreak: 'break-word', margin: 'auto', fontSize: '1.2rem' }}>
              <h1>UMA PLATAFORMA QUE <span style={{color: "#db8300"}}>CONECTA </span></h1>
              <h3>A ferramenta completa para transformar a relação entre alinos e professores</h3>
              <p>Nossa plataforma foi criada para facilitar a jornada de quem busca evolução e quem ensina. Alunos encontram professores qualificados, acompanham treinos personalizados, registram dietas e monitoram sua evolução com gráficos de performance. Professores gerenciam sua agenda de forma independente, controlam pagamentos, acessam históricos de treinos por alunos e expandem sua base de clientes sendo encontrados por novos alunos. Tudo em um só lugar, com comunicação direta e organização simplificada</p>
              <ul>
                <li>Encontrem professores ou seja encontrado por alunos</li>
                <li>Acompanhe treinos, dietas e evolução</li>
                <li>Gerencie agenda e pagamentos</li>
                <li>Comunicação direta entre aluno e professor</li>
              </ul>
            </div>
            
            <img className="imgFirstIlustrator" style={{opacity: '0.8', width: '40%', height: 'auto', borderRadius: '8px', objectFit: 'cover'}} src={imgInfos} alt="Imagem ilustrativa o site com dois personagens" />

          </div>

        
        ) : (

          infosButtons.map((info) => (
            <Card 
              descriptrionStyle={descriptrionStyle} 
              cardClass="cardStyle" 
              customStyles={styles} 
              key={info.id} 
              icon={info.icone} 
              textCard={info.descricao} 
              titleCard={info.titulo} 
            />
          ))

        )}
      
      </div>


    </div>


  </>
}

export default SecondSession;