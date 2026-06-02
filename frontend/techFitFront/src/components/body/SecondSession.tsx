import React from 'react';
import '../../styles/body/SecondSession.css';
import TitleSmall from './TitleSmall';
import { FaWallet } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import Card from '../Card';

const min = 1;
const max = 1000;

function randomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




function SecondSession() {

    const sizeIcons = 65;

    const infosButtons = [
    {
      id: randomNumber(),
      icone: <FaWallet size={sizeIcons} />,
      titulo: "Gestão e evolução",
      descricao: "Conecte-se com os melhores profissionais da sua região avaliados por nossa comunidade."
    },
    {
      id: randomNumber(),
      icone: <IoBarChart size={sizeIcons} />,
      titulo: "Tudo em um só lugar",
      descricao: "Acompanhe seus treinos, dietas e evolução de cargas através de gráficos de performance.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {
      id: randomNumber(),
      icone: <LuBrainCircuit size={sizeIcons} />,
      titulo: "Planejamento e inteligência",
      descricao: "Centralize seus agendamentos, treinos passados e histórico de pagamentos sem complicações.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
  ];

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
      <h3 className='titleSecondSession'> <span> <span style={{color: "#db8300"}} >ALUNOS:</span> ENCONTRE E EVOLUA</span> </h3>

      <div className='containerCards'>

        {infosButtons.map((info) => (
          <Card descriptrionStyle={descriptrionStyle} cardClass="card" customStyles={styles} key={info.id} icon={info.icone} textCard={info.descricao} titleCard={info.titulo} />
        ))}
      

      
      </div>

    </div>


  </>
}

export default SecondSession;