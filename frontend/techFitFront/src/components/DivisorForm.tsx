import React from 'react';
import '../styles/Header.css'

interface Props {
  classNameText?: string;


}

function DivisorForm({classNameText}: Props) {
  return <>
      <div className={classNameText} >
        <div className="d-flex align-items-center my-4">
          <hr className="flex-grow-1" />
          <span className="mx-3 text-muted">ou</span>
          <hr className="flex-grow-1" />
        </div>
      </div>
  </>;

  
}

export default DivisorForm;