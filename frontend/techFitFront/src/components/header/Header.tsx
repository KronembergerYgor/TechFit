import React, {useState} from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import '../Button';
import Button from '../Button';
import logo from '../../assets/LogoCompleta.png';
import { TiThMenu } from "react-icons/ti";


function Header() {
    const [open, setOpen] = useState(false);
  return (
  <header className="header-container">

      {/* botão hambúrguer */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}>
        <TiThMenu />
      </button>
        <img className='logoMenu' src={logo} alt="Logo" width="230vw"/>


        <ul className={`nav-container ${open ? 'active' : ''}`}>

           <div className="menuLinks">
              <Menu name="ALUNOS" url="/login/aluno" />
              <Menu name="PROFISSIONAIS" url="/login/professor" />
              <a className="menuLink" href="#contatos">CONTATOS</a>

           </div>
      

          <li className="listItem buttonRegisterItem">
            <Button classNameText="buttonRegister" title="Cadastre-se" isModal={true} dataBsTarget="#modalCadastro" />
          </li>
        </ul>

           
        {/* <Button classNameText="buttonRegister" title="Cadastre-se" isModal={true} dataBsTarget="#modal1" /> */}
          
   

    </header>
  );
}

export default Header;