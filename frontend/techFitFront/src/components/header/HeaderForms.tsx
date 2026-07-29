import React, {useState, useEffect} from 'react';
import Menu from './titulo/Menu';
import '../../styles/Header.css';
import { TiThMenu } from "react-icons/ti";

import type { Role } from '../../types/Role'; // ✅ import só de tipo
import { apiGet } from '../../services/api';

interface Props {
  imgLogo: string;
  widthImg?: number;
  classNameTextImg?: string;
  classNameTextHeader?: string;
  typePageMenu?: string;

}

function HeaderForms({imgLogo, widthImg, classNameTextImg, classNameTextHeader, typePageMenu}: Props) {
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
          {roles.map((role) => (
              <Menu key={role.id} name={role.name.toUpperCase()} url={"/"  + typePageMenu + "/" + role.id} />
          ))}

      </ul>
    </header>
  </>

  );
}

export default HeaderForms;
