import { type ReactNode } from 'react';
import {FaPhoneAlt } from "react-icons/fa";

interface ButtonProps {
  text: string;
  title: string;
  icon?: ReactNode;
}


function LineCardFourth({text, title, icon}: ButtonProps) {
  return (
    <div className="pt-4 pb-4 border-top w-100">
              
      {/* 💡 d-flex coloca o ícone e o texto lado a lado; align-items-center alinha-os verticalmente */}
      <div className="d-flex align-items-center gap-3">
        
        {/* 🟠 O Círculo do Ícone */}
        <div 
          className="d-flex align-items-center justify-content-center rounded-circle border"
          style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: '#ffffff',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.05)' // Sombra bem sutil
          }}
        >
          {/* Ícone com a cor laranja da sua marca */}
          {icon}
        </div>

        {/* 📝 Os Textos */}
        <div className="d-flex flex-column">
          <span className="fw-bold text-dark m-0" style={{ fontSize: '1.1rem' }}>
            {title}
          </span>
          <span className="text-secondary" style={{ fontSize: '1rem' }}>
            {text}
          </span>
        </div>

      </div>

    </div>
  );
}

export default LineCardFourth;