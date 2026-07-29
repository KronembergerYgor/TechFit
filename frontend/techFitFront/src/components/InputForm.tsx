import React from 'react';

interface Props {
  labelTitle: string;
  typeInput: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idInput?: string;
  maxlengthInput?: number;
  minlengthInput?: number;
  requiredValue?: boolean;
  valueInput?: string;
  placeholderInput?: string;
}

function InputForm({labelTitle, typeInput, name, placeholderInput, idInput, onChange, valueInput, requiredValue, maxlengthInput, minlengthInput}: Props) {
  return <>
    <label htmlFor={idInput} className="mb-1" style={{float: "left"}}><strong>{labelTitle}</strong></label>
    <input minLength={minlengthInput} maxLength={maxlengthInput} required={requiredValue} value={valueInput} onChange={onChange} id={idInput} name={name ?? idInput} type={typeInput} className="mb-3 form-control" placeholder={placeholderInput} aria-label={typeInput}  />
  </>;

  
}

export default InputForm;