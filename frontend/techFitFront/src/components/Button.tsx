import { type ReactNode } from 'react';

interface ButtonProps {
  title: string;
  classNameText: string;
  subTitleBtn?: string;
  icon?: ReactNode;
}


function Button({title, classNameText, icon, subTitleBtn}: ButtonProps) {
  return (
    <button className={ classNameText }>
      {icon} 
      {title} 
    </button>
  );
}

export default Button;