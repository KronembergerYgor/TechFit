import React from 'react';
import logo from '../assets/LogoCompleta.png';

interface Props {
  labelTitle: string;
  typeInput: string;
  idInput?: string;
  placeholderInput?: string;
}

function InputForm({labelTitle, typeInput, placeholderInput, idInput}: Props) {
  return <>
    <label htmlFor={idInput} className="mb-1" style={{float: "left"}}><strong>{labelTitle}</strong></label>
    <input id={idInput} type={typeInput} className="mb-3 form-control" placeholder={placeholderInput} aria-label={typeInput}  />
  </>;

  
}

export default InputForm;