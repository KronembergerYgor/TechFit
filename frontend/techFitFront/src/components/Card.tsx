import { type ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Alterado para 'Props' com P maiúsculo (Boa prática TS)
interface Props {
  titleCard: string;
  textCard: string;
  cardClass: string;
  icon?: ReactNode;
  customStyles?: {
    iconStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    styleButton?: React.CSSProperties;
  };

  descriptrionStyle?: React.CSSProperties;



}



function Card({ titleCard, textCard, icon, customStyles, cardClass="card", descriptrionStyle }: Props) {
 


  const [estaExpandido, setEstaExpandido] = useState(false);

  const limite = 140;
  const sizeIconRow = 20;
  let textoExibido: string;
  let validateSizeText: boolean; 

  if (textCard.length <= limite) {
    textoExibido = textCard;
    validateSizeText = true;
  } else {
    const textoCortado = `${textCard.slice(0, limite)}...`;
    const textoCompleto = textCard;
    textoExibido = estaExpandido ? textoCompleto : textoCortado;
    validateSizeText = false;
  }

  // Retorno Condicional Limpo (Exatamente o que conversamos no começo!)
  if (validateSizeText) {
    return (
      <div className={cardClass}>
        <h2 style={customStyles?.iconStyle}>{icon}</h2>
        <h3 style={customStyles?.titleStyle}>{titleCard}</h3>
        <div className='wrapper-animado'>
          <hr />
          <p className="card-texto" style={descriptrionStyle}>
            {textoExibido}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cardClass}>
      <h2 style={customStyles?.iconStyle}>{icon}</h2>
      <h3 style={customStyles?.titleStyle}>{titleCard}</h3>
      <div className={`wrapper-animado ${estaExpandido ? 'expandido' : 'recolhido'}`}>
        <hr />
        <p className="card-texto" style={descriptrionStyle}>
          {textoExibido}
        </p>
      </div>

      <button 
        style={customStyles?.styleButton} 
        onClick={() => setEstaExpandido(!estaExpandido)}
      >
        {estaExpandido ? (
          <FiChevronUp size={sizeIconRow} />
        ) : (
          <FiChevronDown size={sizeIconRow} />
        )}
      </button>
    </div>
  );
}

export default Card;