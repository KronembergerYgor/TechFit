import { type ReactNode } from 'react';

interface ButtonProps {
  title: string;
  classNameText: string;
  dataBsTarget?: string;
  isModal?: boolean;
  id?: string;
  icon?: ReactNode;

}


function Button({title, classNameText, icon, id, isModal, dataBsTarget}: ButtonProps) {
  return (
    <button type="button" className={ classNameText } id={id} data-bs-toggle={isModal == true  ? "modal" : null} data-bs-target={dataBsTarget}>
      {icon} 
      {title} 
    </button>
  );
}

export default Button;