import React from 'react';

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