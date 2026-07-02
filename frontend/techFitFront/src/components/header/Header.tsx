import React, { useState } from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import '../Button';
import Button from '../Button';
import logo from '../../assets/LogoCompleta.png';
import { TiThMenu } from "react-icons/ti";
import Modal from '../Modal';


function Header() {
    const [open, setOpen] = useState(false);
  return (
  <header className="header-container">

      {/* botão hambúrguer */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        <TiThMenu />
      </button>

      <ul className={`nav-container ${open ? 'active' : ''}`}>
        <Menu name="ALUNOS" url="#" />
        <Menu name="PROFISSIONAIS" url="#" />

        <img src={logo} alt="Logo" width="175vw"/>

        <Menu name="CONTATOS" url="#contatos" />
        <li className="listItem">
          <Button classNameText="buttonRegister" title="Cadastre-se" isModal={true} dataBsTarget="#modal1" />
        </li>
      </ul>



    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> */}



    </header>
  );
}

export default Header;