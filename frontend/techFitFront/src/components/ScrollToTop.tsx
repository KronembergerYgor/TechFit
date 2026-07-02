import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importa o ícone da seta para cima

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Função que monitora a rolagem da página
  const toggleVisibility = () => {
    // Se o usuário rolou mais de 300px para baixo, exibe o botão
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar a página suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 💡 Garante a rolagem suave
    });
  };

  useEffect(() => {
    // Adiciona o evento de scroll quando o componente renderiza
    window.addEventListener('scroll', toggleVisibility);

    // Limpa o evento quando o componente é desmontado (boa prática de performance)
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const sytleButton = {
    zIndex: 1000,           // Garante que o botão fique na frente de tudo
    width: '50px',
    height: '50px',
    backgroundColor: '#db8300', // Cor laranja da sua marca
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in-out', // Efeito suave ao aparecer
    

  }



  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // 💡 position-fixed: fixa na tela | bottom-0 e end-0: move para o canto inferior direito
          // 💡 p-3 m-4: adiciona preenchimento interno e margem da borda da tela
          // 💡 rounded-circle shadow: deixa redondo e adiciona uma sombra moderna
          className="btn btn-warning position-fixed bottom-0 end-0 p-3 m-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center"
          style={sytleButton}
          title="Voltar ao topo"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}