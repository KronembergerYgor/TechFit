import React from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import '../Button';
import Button from '../Button';

function Header() {
  return (
  <header className="header-container">

      <ul className='nav-container'>
          
          <Menu name="ALUNOS" url="#"/>
          <Menu name="PROFISSIONAIS" url="#"/>
      
      </ul>


      <ul className='nav-container'>
        
        <Menu name="REGISTRO" url="#"/>
        <li className="listItem"> <Button classNameText="buttonRegister" title="Cadastre-se"/></li>

      </ul>
  </header>
  );
}

export default Header;