import React from 'react';

interface ButtonProps {
  title: string;
  backgroundColor: string;
  classNameText: string;
  fontSize: string;
}


function Button({title, backgroundColor, classNameText, fontSize}: ButtonProps) {
  return (
    <button className={ classNameText } style={{ backgroundColor: backgroundColor, fontSize: fontSize   }}>{title}</button>
  );
}

export default Button;