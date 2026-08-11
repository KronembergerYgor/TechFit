import React from 'react';
import '../../styles/App.css';
import '../../styles/HeaderHomePage.css';

import { NavLink } from "react-router-dom";
import {
  FaThLarge,
  FaRegUser,
  FaRegCalendarAlt,
  FaDollarSign,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import LogoCompleta from "../../assets/LogoCompleta.png";

interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: <FaThLarge /> },
  { label: "Meus Alunos", path: "/alunos", icon: <FaRegUser /> },
  { label: "Agenda", path: "/agenda", icon: <FaRegCalendarAlt /> },
  { label: "Séries de Treino", path: "/series-treino", icon: <GiWeightLiftingUp /> },
  { label: "Controle de Pagamentos", path: "/pagamentos", icon: <FaDollarSign /> },
  { label: "Relatórios", path: "/relatorios", icon: <FaChartBar /> },
  { label: "Configurações", path: "/configuracoes", icon: <FaCog /> },
];

function HeaderForms() {
  return (
    <aside className="sidebar">
      <img
        src={LogoCompleta}
        alt="Logo TechFit"
        className="sidebar__logo mb-5"
      />

      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar__item${isActive ? " sidebar__item--active" : ""}`
                }
              >
                <span className="sidebar__icon">{item.icon}</span>
                <span className="sidebar__label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <span className="sidebar__promo-brand">TechFit</span>
    </aside>
  );
}

export default HeaderForms;