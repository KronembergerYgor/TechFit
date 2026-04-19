import React from 'react';

interface ButtonProps {
  title: string;
  classNameText: string;
}


function Button({title, classNameText}: ButtonProps) {
  return (
    <button className={ classNameText }>{title}</button>
  );
}

export default Button;