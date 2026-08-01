import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/LoginPage.css'
import HeaderForms from '../components/header/HeaderForms';
import LogoCompleta from '../assets/LogoCompleta.png';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import DivisorForm from '../components/DivisorForm';
import ModalWarning from '../components/ModalWarning';

import type { Role } from '../types/Role';
import { apiGet, apiPost } from '../services/api';

import TitlePageForm from '../components/TitlePageForm';

function maskCellPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, '($1');
  if (digits.length <= 7) return digits.replace(/(\d{2})(\d{0,5})/, '($1)$2');
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1)$2-$3');
}

interface FormData {
  name: string;
  email: string;
  cell_phone: string;
  password: string;
  password_confirmation: string;
}

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

function RegisterPage() {
  const { typeParam } = useParams()
  const navigate = useNavigate();

  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cell_phone: '',
    password: '',
    password_confirmation: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    apiGet<Role[]>('/roles')
      .then(setRoles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!success) return;

    // inicia o fade-out um pouco antes dos 30s acabarem
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000 - 400); // 400ms = duração da transição

    // remove o alerta do DOM e redireciona após o fade terminar
    const removeTimer = setTimeout(() => {
      setSuccess(false);
      setFadeOut(false);
      navigate(`/login/${typeParam}`);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [success, navigate, typeParam]);


  const roleAluno = roles.find(role => role.id === Number(typeParam));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === 'cell_phone') {
      setFormData(prev => ({ ...prev, cell_phone: maskCellPhone(value) }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        cell_phone: formData.cell_phone.replace(/\D/g, ''),
        role_id: roleAluno?.id,
      };

      await apiPost('/register', payload);
      setSuccess(true);
    } catch (err) {
      const apiError = err as ApiErrorResponse;
      setFormErrors(apiError.errors || {});
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar: {error}</p>;
  if (!roleAluno) return <p>Role não encontrada.</p>;


  const textRoleAluno = roleAluno.name.toUpperCase();

  return (
    <>
      <HeaderForms
        classNameTextHeader="header-container header-container-login header-container-register mb-4 border-bottom"
        imgLogo={LogoCompleta}
        widthImg={200}
        typePageMenu="Register"
      />

      {success && (
        <ModalWarning icon={<FaRegCheckCircle style={{ fontSize: "5rem", color: "#db8300" }} />} fadeOut={fadeOut} titleModal={"Cadastro Realizado com sucesso"} subTitle={"Você será redirecionado para página de login em 5 segundos"} />
      )}

      <div data-aos="fade-up" data-aos-delay="200">

        <div className="boxRegister">

            <TitlePageForm titleForm="CADASTRO DE " typeParam={textRoleAluno} subtitleForm="Crie sua conta para começar" />

            <div className="inputsDivRegister" >
                <form onSubmit={handleSubmit}>
                  {formErrors.name && <span className="text-danger m-2"> - {formErrors.name[0]}</span>}
                  <InputForm name="name" valueInput={formData.name} onChange={handleChange} requiredValue={true} labelTitle="Nome Completo *" typeInput="text" placeholderInput="Digite seu nome completo" idInput="nameRegister"/>

                  {formErrors.email && <span className="text-danger m-2"> - {formErrors.email[0]}</span>}
                  <InputForm name="email" valueInput={formData.email} onChange={handleChange} requiredValue={true} labelTitle="E-mail *" typeInput="email" placeholderInput="Digite seu E-mail" idInput="emailRegister"/>

                  {formErrors.cell_phone && <span className="text-danger m-2"> - {formErrors.cell_phone[0]}</span>}
                  <InputForm minlengthInput={14} maxlengthInput={14} requiredValue={false} valueInput={formData.cell_phone} onChange={handleChange} labelTitle="Celular" typeInput="text" placeholderInput="Digite seu celular. EX: 21900000000" idInput="cell_phone"/>

                  {formErrors.password && <span className="text-danger m-2"> - {formErrors.password[0]}</span>}
                  <InputForm name="password" valueInput={formData.password} onChange={handleChange} requiredValue={true} labelTitle="Senha *" typeInput="password" placeholderInput="Digite sua senha" idInput="passwordRegister"/>

                  <InputForm name="password_confirmation" valueInput={formData.password_confirmation} onChange={handleChange} requiredValue={true} labelTitle="Confirme Senha *" typeInput="password" placeholderInput="Confirme sua senha" idInput="confirmPasswordRegister"/>

                  <Button typeButton="submit" classNameText="buttonRegisterPage" title={submitting ? 'Cadastrando...' : 'Cadastrar'} />
                </form>

                <DivisorForm/>
                <div className='text-center'>
                  <span>Já tem conta? <a href={"/login/" + typeParam} >Entre aqui</a></span>
                </div>

              </div>


        </div>



      </div>

    </>
  )
}

export default RegisterPage;