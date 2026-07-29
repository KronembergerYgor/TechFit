import React, {useState, useEffect} from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import '../Button';
import Button from '../Button';
import logo from '../../assets/LogoCompleta.png';
import { TiThMenu } from "react-icons/ti";

import type { Role } from '../../types/Role'; // ✅ import só de tipo
import { apiGet } from '../../services/api';

function Header() {
    const [open, setOpen] = useState(false);

    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      apiGet<Role[]>('/roles')
        .then(setRoles)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;



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

            {roles.map((role) => (
              <Menu name={role.name.toUpperCase()} url={"/login/" + role.id} />

            ))}

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