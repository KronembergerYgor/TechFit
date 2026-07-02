import { type ReactNode } from 'react';

interface ButtonProps {
  title: string;
  classNameText: string;
  subTitleBtn?: string;
  dataBsTarget?: string;
  isModal?: boolean;
  id?: string;
  icon?: ReactNode;

}


function Button({title, classNameText, icon, subTitleBtn, id, isModal, dataBsTarget}: ButtonProps) {
  return (
    <button type="button" style={{boxShadow: '2px 2px 4px #000'}} className={ classNameText } id={id} data-bs-toggle={isModal == true  ? "modal" : null} data-bs-target={dataBsTarget}>
      {icon} 
      {title} 
    </button>
  );
}

export default Button;