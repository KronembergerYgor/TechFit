// src/pages/Unauthorized.tsx
import { Link } from 'react-router-dom';
import { MdBlock } from 'react-icons/md';

function Unauthorized() {
  return (
    <div className="unauthorized-container">
      <MdBlock style={{ fontSize: '5rem', color: '#db8300' }} />
      <h1>Acesso não autorizado</h1>
      <p>Você precisa estar logado para acessar essa página.</p>
      <Link to="/login/1" className="buttonEnterLogin">
        Ir para login
      </Link>
    </div>
  );
}

export default Unauthorized;