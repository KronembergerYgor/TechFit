import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import Button from '../Button';

function Footer() {
  return <>
    {/* <div style={{backgroundColor: "#ffffff"}}> */}
        <footer style={{ display: 'flex', alignItems: 'flex-start', color:'#000000' , textAlign: 'start', justifyContent: 'center'}}>
          {/* <img src={logoFooter} style={{width: "1%"}} alt="Logo Footer" />   */}

          <p style={{padding: '0.4rem', margin: '0'}}>© 2026 TechFit. Todos os direitos reservados.</p>
          
          {/* <div style={{textAlign: 'start'}}>
            <h2>Pronto para evoluir?</h2>
            <h3 style={{fontWeight:'100'}}>Junte-se ao TechFit e inoe seus resultados para o próximo nível</h3>
            <Button classNameText="buttonRegister" title="Cadastre-se" />
          </div> */}
          
        </footer>

    {/* </div> */}
    
    


  </>
}

export default Footer;