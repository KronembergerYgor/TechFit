import { type ReactNode, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface props {
  titleCard: string;
  textCard: string;
  icon?: ReactNode;
}


function Card({titleCard, textCard, icon}: props) {

  const styles = {
    iconStyle:{
      fontSize:"5rem", 
      padding:"0", 
      margin: "0", 
      color: "#db8300",
      filter: 'drop-shadow(4px 2px 2px rgba(0, 0, 0, 0.5))'
    },
    titleStyle:{
      padding:"0", 
      margin: "0"
    },
    styleButton :{
      background: 'none',
      color: '#e18600', // O laranja do seu site TechFit
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: '600',
      fontSize: '0.85rem',
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      padding: '0px',
      transition: 'transform 1s',
      border: 'solid 0.5px #4b4b4b',
      borderRadius: '9px',
      boxShadow: '0px 1px 2px #000'
    }
  } 

    const descriptrionStyle: React.CSSProperties ={
      overflowWrap: 'break-word', 
      wordBreak: 'break-word',
      color: '#000000', 
      margin: '0.5rem 0.5rem 1.5rem', 
      lineHeight: '1.6'
    }

  const [estaExpandido, setEstaExpandido] = useState(false);

  const limite = 170;
  const sizeIconRow = 20;
  let textoExibido: string;
  let validateSizeText: boolean; 

  console.log(textCard.length)

  if (textCard.length <= limite) {
    textoExibido = textCard;
    validateSizeText = true;
  }else{
    // Criamos as duas versões do texto
    const textoCortado = `${textCard.slice(0, limite)}...`;
    const textoCompleto = textCard;
    textoExibido = estaExpandido ? textoCompleto : textoCortado;
    validateSizeText = false;

  }


  if(validateSizeText){

     return (
        <div className="card">
          <h2 style={styles.iconStyle}>{icon}</h2>
          <h3 style={styles.titleStyle}>{titleCard}</h3>
          <div className={'wrapper-animado'}>
            <hr />
            <p className="card-texto" style={descriptrionStyle}>
              {textoExibido}
            </p>
          </div>

        </div>
      );

  }else{

    return (
      <div className="card">
        <h2 style={styles.iconStyle}>{icon}</h2>
        <h3 style={styles.titleStyle}>{titleCard}</h3>
        <div className={`wrapper-animado ${estaExpandido ? 'expandido' : 'recolhido'}`}>
          <hr />
          <p className="card-texto" style={descriptrionStyle}>
            {textoExibido}
          </p>
        </div>

        <button 
          style={styles.styleButton} 
          onClick={() => setEstaExpandido(!estaExpandido)}
        >
          {estaExpandido ? (
            <>
              <FiChevronUp size={sizeIconRow} />
            </>
          ) : (
            <>
              <FiChevronDown size={sizeIconRow} />
            </>
          )}
        </button>
      </div>
    );

  }

  

  
}

export default Card;