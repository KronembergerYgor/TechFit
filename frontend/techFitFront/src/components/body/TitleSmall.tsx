import React from 'react';

interface props {
  titleText: string;
}


function TitleSmall({titleText}: props) {
  return <h3 className="TitleFirst">{titleText}</h3>
}

export default TitleSmall;