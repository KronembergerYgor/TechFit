import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/LoginPage.css';

import TitlePageForm from '../components/TitlePageForm';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import ModalWarning from '../components/ModalWarning';
import LogoCompleta from '../assets/LogoCompleta.png';
import { MdBlock } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import { apiPost } from '../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type TokenStatus = 'checking' | 'valid' | 'invalid';

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const email = searchParams.get('email') || '';

  const [tokenStatus, setTokenStatus] = useState<TokenStatus>('checking');

  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: '',
    password_confirmation: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorFadeOut, setErrorFadeOut] = useState(false);
  const [successFadeOut, setSuccessFadeOut] = useState(false);

  // valida o token assim que a página carrega
  useEffect(() => {
    if (!token || !email) {
      setTokenStatus('invalid');
      return;
    }

    async function checkToken() {
      try {
        const res = await apiPost<{ valid: boolean }>('/validate-reset-token', { token, email });
        setTokenStatus(res.valid ? 'valid' : 'invalid');
      } catch {
        setTokenStatus('invalid');
      }
    }

    checkToken();
  }, [token, email]);

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
      await apiPost('/ResetPassword', {
        token,
        email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      });
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

    <div data-aos="fade-up" data-aos-delay="200">

      <div className="boxRegister mt-5">
          <header className="headerForgotPassword">
            <a href="/">
              <img src={LogoCompleta} alt="Logo" className='logoMenuForgotPassword'/>
            </a>
          </header>

          <div className="mt-3">
            {tokenStatus === 'checking' && (
              <p className="text-center">Verificando link...</p>
            )}

            {tokenStatus === 'invalid' && (
              <ModalWarning
                icon={<MdBlock style={{ fontSize: "5rem", color: "#db8300" }} />}
                fadeOut={false}
                titleModal={"Link inválido ou expirado"}
                subTitle={"Solicite um novo link de recuperação de senha."}
              />
            )}

            {tokenStatus === 'valid' && (
              <>
               

                {!showSuccess && (
                  <form onSubmit={handleSubmit}>
                    <TitlePageForm titleForm="REDEFINIR " typeParam={"SENHA"} subtitleForm="Digite sua nova senha" />

                    <InputForm
                      name="password"
                      valueInput={formData.password}
                      onChange={handleChange}
                      requiredValue={true}
                      labelTitle="Nova senha *"
                      typeInput="password"
                      placeholderInput="Digite sua nova senha"
                      idInput="passwordReset"
                    />

                    <InputForm
                      name="password_confirmation"
                      valueInput={formData.password_confirmation}
                      onChange={handleChange}
                      requiredValue={true}
                      labelTitle="Confirmar senha *"
                      typeInput="password"
                      placeholderInput="Confirme sua nova senha"
                      idInput="passwordConfirmationReset"
                    />

                    <Button
                      typeButton="submit"
                      classNameText="buttonRegisterPage mb-5"
                      title={submitting ? 'Enviando...' : 'Redefinir senha'}
                    />
                  </form>
                )}
              </>
            )}
          </div>
        </div>


      {showError && (
          <ModalWarning
            icon={<MdBlock style={{ fontSize: "5rem", color: "#db8300" }} />}
            fadeOut={errorFadeOut}
            titleModal={"Erro ao redefinir senha!"}
            subTitle={formErrors.password?.[0] || formErrors.email?.[0] || "Link inválido ou expirado"}
          />
        )}

        {showSuccess && (
          <ModalWarning
            icon={<FaCheckCircle style={{ fontSize: "5rem", color: "#2e7d32" }} />}
            fadeOut={successFadeOut}
            titleModal={"Senha redefinida!"}
            subTitle={"Redirecionando para a página inicial..."}
          />
        )}

        </div>
   
  );
}

export default ResetPassword;