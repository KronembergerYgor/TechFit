import { type ReactNode } from 'react';
import { Link } from 'react-router-dom'

interface MenuProps {
  name: string;
  url: string;
}

function Menu({ name, url }: MenuProps) {

  return (
 <li className="listItem">
    <Link className="menuLink" to={url}>
      {name}
    </Link>
  </li>
  );
}

export default Menu;