import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/LoginPage.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import TitlePageForm from '../components/TitlePageForm';
import InputForm from '../components/InputForm';
import LogoCompleta from '../assets/LogoCompleta.png';
import DivisorForm from '../components/DivisorForm';
import ModalWarning from '../components/ModalWarning';

import Modal from '../components/Modal';
import TitleModalRegister from '../components/TitleModalRegister';
import BodyModalRegisters from '../components/BodyModalRegisters';

import Button from '../components/Button';

import { apiPost } from '../services/api';

interface ForgotPasswordFormData {
  email: string;
}

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ForgotPasswordFormData>({ email: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorFadeOut, setErrorFadeOut] = useState(false);
  const [successFadeOut, setSuccessFadeOut] = useState(false);

  // fade-out automático do modal de erro (5s)
  useEffect(() => {
    if (!showError) return;

    const fadeTimer = setTimeout(() => {
      setErrorFadeOut(true);
    }, 5000 - 400); // 400ms = duração da transição

    const removeTimer = setTimeout(() => {
      setShowError(false);
      setErrorFadeOut(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [showError]);

  // fade-out automático do modal de sucesso (5s)
  useEffect(() => {
    if (!showSuccess) return;

    const fadeTimer = setTimeout(() => {
      setSuccessFadeOut(true);
    }, 5000 - 400);

    const removeTimer = setTimeout(() => {
      setShowSuccess(false);
      setSuccessFadeOut(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [showSuccess]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setFormErrors({});

    try {
      await apiPost('/ForgotPassword', formData);
      setShowSuccess(true);
      setTimeout(() => navigate('/'), 2500);
    } catch (err) {
      const apiError = err as ApiErrorResponse;
      setFormErrors(apiError.errors || {});
      setShowError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
    <div data-aos="fade-up" data-aos-delay="200">

        <div className="boxRegister mt-5">

          <header className="headerForgotPassword">
            <a className="linkBackMenu" onClick={() => navigate(-1)}><IoArrowBackCircle /><span>Voltar ao Login</span></a>

            <a href="/" style={{float: "right"}}><img src={LogoCompleta} alt="Logo" className='logoMenuForgotPassword'/></a>
          </header>

          <div className="mt-3">

            {showError && (
              <ModalWarning
                icon={<MdBlock style={{ fontSize: "5rem", color: "#db8300" }} />}
                fadeOut={errorFadeOut}
                titleModal={"Erro ao enviar e-mail!"}
                subTitle={formErrors.email?.[0] || "Verifique o e-mail digitado e tente novamente"}
              />
            )}

            {showSuccess && (
              <ModalWarning
                icon={<FaCheckCircle style={{ fontSize: "5rem", color: "#2e7d32" }} />}
                fadeOut={successFadeOut}
                titleModal={"E-mail enviado!"}
                subTitle={"Se o e-mail existir em nossa base, você receberá um link de recuperação em instantes."}
              />
            )}

            {!showSuccess && (
              <form onSubmit={handleSubmit}>
                <TitlePageForm titleForm="RECUPERAÇÃO DE " typeParam={"SENHA"} subtitleForm="Digite seu e-mail para receber as instruções de recuperação" />

                <InputForm
                  name="email"
                  valueInput={formData.email}
                  onChange={handleChange}
                  requiredValue={true}
                  labelTitle="E-mail *"
                  typeInput="email"
                  placeholderInput="Digite seu e-mail para recuperar a senha"
                  idInput="nameRegister"
                />

                <Button
                  typeButton="submit"
                  classNameText="buttonRegisterPage"
                  title={submitting ? 'Enviando...' : 'Enviar'}
                />
              </form>
            )}

            <DivisorForm/>

            <div className='text-center mb-3'>
              <span>Não possui conta? <a data-bs-toggle="modal" data-bs-target="#modalCadastro" href="#" style={{ color: "rgb(219, 131, 0)"}}> Cadastre-se Já</a></span>
            </div>
        </div>


      </div>


    </div>

    <Modal idModal="modalCadastro" titleModal={<TitleModalRegister />} bodyModal={<BodyModalRegisters />} />
        
    </>
   
  );
}

export default ForgotPassword;