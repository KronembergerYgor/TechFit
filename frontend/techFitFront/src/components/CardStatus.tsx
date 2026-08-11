import { FaUserFriends } from "react-icons/fa";
import "../styles/HeaderHomePage.css"; // só o essencial: cor laranja que o Bootstrap não tem pronta

interface StatCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
  deltaText?: string;
  deltaPositive?: boolean;
}

export default function CardStatus({
  icon = <FaUserFriends />,
  title,
  value,
  deltaText,
  deltaPositive = true,
  
}: StatCardProps) {
  return (
    <div className="col card border-0 shadow-sm rounded-4 h-100 m-3">
      <div className="card-body d-flex align-items-center gap-3 p-3 p-md-4">
        <div className="stat-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
          {icon}
        </div>

        <div className="d-flex flex-column">
          <span className="text-secondary small mb-1">{title}</span>
          <span className="fw-bold fs-3 lh-1 mb-1">{value}</span>
          {deltaText && (
            <span
              className={`small fw-semibold ${
                deltaPositive ? "text-success" : "text-danger"
              }`}
            >
              {deltaText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}