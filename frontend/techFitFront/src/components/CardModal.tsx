import { type ReactNode } from 'react';
import {FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  cardTypeStyle: string;
  hrefUrl: string;
  titleCard: string;
  description: string;
  icon: ReactNode;

}


function CardModal({cardTypeStyle, icon, hrefUrl, titleCard, description}: ButtonProps) {
  return (
      <a href={hrefUrl} className={cardTypeStyle + " card-register text-decoration-none"}>
        <div className="card-icon-wrapper">
          {/* <FaUserGraduate size={30} /> */}
          {icon}
        </div>
        <h3 className="card-title">{titleCard}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-arrow-btn">
          <FaArrowRight size={16} />
        </div>
      </a>
  );
}

export default CardModal;