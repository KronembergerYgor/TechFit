import { useState } from 'react';
import logoFooter from '../../assets/logoFooter.png';
import Button from '../Button';
import { FaShieldAlt } from "react-icons/fa";


function Footer() {
  
  return <>
    <footer>
        {/* <div style={{ backgroundColor: '#ffffff', display: 'flex', alignItems: 'flex-start', color:'#000000' , textAlign: 'start', justifyContent: 'center'}}> */}
           <p style={{padding: '0.4rem', margin: '0', color:'#000000' , textAlign: 'center'}}> <FaShieldAlt style={{color: '#db8300', flexShrink: 0, margin:"0.5rem"}} /> © 2026 TechFit. Todos os direitos reservados.</p>
        {/* </div> */}
    </footer>

  </>
}

export default Footer;