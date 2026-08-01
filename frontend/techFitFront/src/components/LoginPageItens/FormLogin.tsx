import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import InputForm from '../InputForm';
import ModalWarning from '../ModalWarning';
import { MdBlock } from "react-icons/md";

import { apiPost } from '../../services/api';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
    role: { id: number; name: string };
  };
  token: string;
}

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

function FormLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setFormErrors({});

    try {
      const response = await apiPost<LoginResponse>('/login', formData);
      localStorage.setItem('techfit_token', response.token);
      navigate('/teste');
    } catch (err) {
      const apiError = err as ApiErrorResponse;
      setFormErrors(apiError.errors || {});
      if (apiError.errors?.email) {
        setShowLoginError(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  // controla o fade-out do modal de erro de login
  useEffect(() => {
    if (!showLoginError) return;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000 - 400); // 400ms = duração da transição

    const removeTimer = setTimeout(() => {
      setShowLoginError(false);
      setFadeOut(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [showLoginError]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputsDiv">

        {showLoginError && (
          <ModalWarning
            icon={<MdBlock style={{ fontSize: "5rem", color: "#db8300" }} />}
            fadeOut={fadeOut}
            titleModal={"Erro ao Realizar login!"}
            subTitle={formErrors.email?.[0] || "Verifique seu e-mail e senha e tente novamente"}
          />
        )}

        <InputForm
          name="email"
          valueInput={formData.email}
          onChange={handleChange}
          requiredValue={true}
          labelTitle="E-mail"
          typeInput="email"
          placeholderInput="Digite seu E-mail"
          idInput="emailLogin"
        />

        {formErrors.password && <span className="text-danger m-2"> - {formErrors.password[0]}</span>}
        <InputForm
          name="password"
          valueInput={formData.password}
          onChange={handleChange}
          requiredValue={true}
          labelTitle="Senha"
          typeInput="password"
          placeholderInput="Digite sua senha"
          idInput="passwordLogin"
        />

        <a href="#">Esqueceu sua senha?</a>
      </div>

      <div className="fieldButtonEnter">
        <Button
          typeButton="submit"
          classNameText="buttonEnterLogin"
          title={submitting ? 'Entrando...' : 'Entrar'}
        />
      </div>
    </form>
  );
}

export default FormLogin;