import React from 'react';
import { FaUser, FaDumbbell  } from "react-icons/fa6";
import '../../styles/body/FirstSession.css';
import TitleSmall from './TitleSmall';
import Button from '../Button';

function FirstSession() {
  return <>
    <div className="containerFirst containers">
          
        <TitleSmall titleText='TECNOLOGIA E PERFORMANCE'/>
        <h1 className="TitleSubText" ><span className='tecFitName'>TechFit:</span>  O Ecossistema que conecta você e sua melhor versão Fitness</h1>
        <TitleSmall titleText='Seja você um aluno em busca de performance ou um profissional querendo instalar seu negócio, nós temos a tecnologia certa'/>
        
        <div className="containerButtons">
          <Button classNameText="buttonContainerFirst" title="Sou Aluno" icon={<FaUser />} subTitleBtn="Encontre seu personal"/>
          <Button classNameText="buttonContainerFirst" title="Sou Professor" icon={<FaDumbbell />} subTitleBtn="Cadastre-se Agora"/>
        </div>


    </div>
 




  </>;
}

export default FirstSession;