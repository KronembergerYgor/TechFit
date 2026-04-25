import React, { useState } from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import '../Button';
import Button from '../Button';
import logo from '../../assets/LogoCompleta.png';

function Header() {
    const [open, setOpen] = useState(false);
  return (
  <header className="header-container">

      {/* botão hambúrguer */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className={`nav-container ${open ? 'active' : ''}`}>
        <Menu name="ALUNOS" url="#" />
        <Menu name="PROFISSIONAIS" url="#" />

        <img src={logo} alt="Logo" width="19%"/>

        <Menu name="REGISTRO" url="#" />
        <li className="listItem">
          <Button classNameText="buttonRegister" title="Cadastre-se" />
        </li>
      </ul>

    </header>
  );
}

export default Header;