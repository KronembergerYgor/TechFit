import React from 'react';
import '../../../styles/titulos/Menu.css';

interface MenuProps {
  name: string;
  url: string;
}

function Menu({ name, url }: MenuProps) {
    
  return (
    <li className="listItem">
        <a className="menuLink" href={url}>
            {name}
        </a>
    </li>
    
  );
}

export default Menu;