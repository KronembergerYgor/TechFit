import { type ReactNode } from 'react';
import { Link } from 'react-router-dom'

interface MenuProps {
  name: string;
  url: string;
  key?: number;
}

function Menu({ name, url, key }: MenuProps) {

  return (
 <li key={key} className="listItem">
    <Link className="menuLink" to={url}>
      {name}
    </Link>
  </li>
  );
}

export default Menu;