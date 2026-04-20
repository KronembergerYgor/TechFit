import React from 'react';
import '../../styles/body/FirstSession.css';
import TitleSmall from './TitleSmall';
import Button from '../Button';

function FirstSession() {
  return <>
    <div className="containerFirst containers" style={{ border: "1px solid #000" }}>
          
        <TitleSmall titleText='TECNOLOGIA E PERFORMANCE'/>
        <h1 className="TitleSubText" >TechFit: O Ecossistema que conecta você e sua melhor versão Fitness</h1>
        <TitleSmall titleText='Seja você um aluno em busca de performance ou um profissional querendo instalar seu negócio, nós temos a tecnologia certa'/>
        
        <div className="containerButtons">
          <Button classNameText="buttonContainerFirst" title="Sou Aluno" />
          <Button classNameText="buttonContainerFirst" title="Sou Professor" />
        </div>


    </div>
 




  </>;
}

export default FirstSession;