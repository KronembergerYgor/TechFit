import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 💡 Importante: Importe o CSS do AOS // 💡 Importante: Importe o CSS do AOS
import Header from './components/header/Header';
import FirstSession from './components/body/FirstSession';
import SecondSession from './components/body/SecondSession';
import ThirdSession from './components/body/ThirdSession';
import Footer from './components/body/Footer';
import './styles/App.css';
import logo from './assets/LogoNavigate.png';




function App() {

 useEffect(() => {
   const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.setAttribute("rel", "icon");
    link.setAttribute("type", "image/png");
    link.setAttribute("href", logo);

    document.head.appendChild(link);

    document.title = "TechFit Front";

    AOS.init({
      duration: 800, // Duração da animação em milissegundos
      once: true,     // Se a animação deve ocorrer apenas uma vez
      easing: 'ease-out', // Tipo de suavização
    });



  }, []);


  return (
    <>
      {/* 🚀 O Header surge deslizando de cima para baixo */}
      <div data-aos="fade-down" data-aos-duration="600">
        <Header />
      </div>

      {/* 💡 Removemos a borda preta de teste e adicionamos o container geral */}
      <div className='containerGeral'>
        
        {/* 🏠 Primeira Seção: Surge com Fade normal bem rápido */}
        <div className='backgroundFirstSession' data-aos="fade-up" data-aos-delay="200">
          <FirstSession />
        </div>

        {/* 📊 Segunda Seção (Onde estão as suas abas e cards): 
            Ela espera a primeira carregar para surgir suavemente de baixo para cima */}
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <SecondSession />
        </div>

        {/* 🎯 Terceira Seção */}
        <div data-aos="fade-up" data-aos-delay="200">
          <ThirdSession />
        </div>

        {/* 📞 Rodapé */}
        <Footer />
          
      </div>
    </>
  )
}

export default App
