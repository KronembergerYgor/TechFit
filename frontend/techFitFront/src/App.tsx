import { useEffect } from 'react'
import Header from './components/header/Header';
import FirstSession from './components/body/FirstSession';
import SecondSession from './components/body/SecondSession';
import ThirdSession from './components/body/ThirdSession';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  }, []);

  return (
    <>
      <Header />

      <div className='containerGeral'style={{ border: "1px solid #000" }}>
          <FirstSession />
          <SecondSession />
          <ThirdSession />
      </div>

    </>
  )
}

export default App
