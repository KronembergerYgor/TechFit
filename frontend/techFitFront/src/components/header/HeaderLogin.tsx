import React, {useState} from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import { TiThMenu } from "react-icons/ti";

interface Props {
  imgLogo: string;
}

function HeaderLogin({imgLogo}: Props) {
    const [open, setOpen] = useState(false);
  return (<>
    <button
      className="hamburgerLogin"
      onClick={() => setOpen(!open)}>
      <TiThMenu />
    </button>
    <header className="header-container header-container-login">

      <a href="/"><img className='logoMenuLogin' src={imgLogo} alt="Logo"/></a>

      <ul
        className={`nav-container-login ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
      >
        <Menu name="HOME" url="/"/>
        <Menu name="ALUNOS" url="/login/aluno"/>
        <Menu name="PROFESSORES" url="/login/professor"/>
      </ul>
    </header>
  </>

  );
}

export default HeaderLogin;
