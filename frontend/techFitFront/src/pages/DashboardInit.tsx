import Sidebar from "../components/header/Sidebar";
import CardStatus from "../components/CardStatus";
import "../styles/HeaderHomePage.css";
import "../styles/BodyPageInit.css";

import { FaUserFriends, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-layout__content">

        <div className="row">
          <CardStatus
            icon={<FaDollarSign />}
            title="Total de Alunos Ativos"
            value="42"
            // deltaText="+12.5% em relação ao mês anterior"
          />

          <CardStatus
            icon={<FaUserFriends />}
            title="Receita do Mês"
            value="R$ 8.450,00"
            // deltaText="+12.5% em relação ao mês anterior"
          />

          <CardStatus
            icon={<FaCalendarAlt />}
            title="Alunas esta Semana"
            value="18"
            // deltaText="+12.5% em relação ao mês anterior"
          />

        </div>


      </main>
    
    </div>
  );
}