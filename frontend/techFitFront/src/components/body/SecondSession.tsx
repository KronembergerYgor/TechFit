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
      descricao: "Acompanhe seus treinos, dietas e evolução de cargas através de gráficos de performance.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {
      id: randomNumber(),
      icone: <LuBrainCircuit size={sizeIcons} />,
      titulo: "Planejamento e inteligência",
      descricao: "Centralize seus agendamentos, treinos passados e histórico de pagamentos sem complicações.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
  ];


  return <>

    <div className="containerSecond containers">
      <h3 className='titleSecondSession'> <span> <span style={{color: "#db8300"}} >ALUNOS:</span> ENCONTRE E EVOLUA</span> </h3>

      <div className='containerCards'>

        {infosButtons.map((info) => (
          <Card key={info.id} icon={info.icone} textCard={info.descricao} titleCard={info.titulo} />
        ))}
      

      
      </div>

    </div>


  </>
}

export default SecondSession;