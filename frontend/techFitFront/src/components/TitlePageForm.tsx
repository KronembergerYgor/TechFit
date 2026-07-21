import React from 'react';
interface Props {
  typeParam: string | undefined;
  titleForm: string;
  subtitleForm: string;


}

function TitlePageForm({typeParam, titleForm, subtitleForm}: Props) {
  return <>
     <div className='titleFormLogin'>
        <h1>{titleForm} <span className='tecFitName'>{typeParam?.toUpperCase()}</span></h1>
        <p className='fs-6 text card-subtitle mb-5 text-muted'>{subtitleForm}</p>
      </div>
  </>;

  
}

export default TitlePageForm;