import React, {useState} from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import { TiThMenu } from "react-icons/ti";

interface Props {
  imgLogo: string;
  widthImg?: number;
  classNameTextImg?: string;
  classNameTextHeader?: string;
  urlAlunos: string;
  urlProfessores: string;


  

}

function HeaderForms({imgLogo, widthImg, classNameTextImg, urlProfessores, urlAlunos, classNameTextHeader}: Props) {
    const [open, setOpen] = useState(false);
  return (<>
    <button
      className="hamburgerLogin"
      onClick={() => setOpen(!open)}>
      <TiThMenu />
    </button>
    <header className={classNameTextHeader}>
      <a href="/"><img className={classNameTextImg} src={imgLogo} alt="Logo" width={widthImg}/></a>
      <ul
        className={`nav-container-login ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
      >
        <Menu name="HOME" url="/"/>
        <Menu name="ALUNOS" url={urlAlunos}/>
        <Menu name="PROFESSORES" url={urlProfessores}/>
      </ul>
    </header>
  </>

  );
}

export default HeaderForms;
