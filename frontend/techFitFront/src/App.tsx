import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';
import logo from './assets/LogoNavigate.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Teste from './pages/Teste';
import Unauthorized from './pages/Unauthorized';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword'; // ajuste o caminho conforme sua estrutura





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
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/:typeParam" element={<LoginPage />} />
      <Route path="/Register/:typeParam" element={<RegisterPage />} />
      <Route path="/Unauthorized" element={<Unauthorized />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />

      <Route path="/redefinir-senha" element={<ResetPassword />} />
      <Route element={<PrivateRoute />}>
        <Route path="/teste" element={<Teste />} />
      </Route>
    </Routes>
    </>
  )
}

export default App