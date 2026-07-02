import React from 'react';

interface props {
  titleText: string;
}


function TitleSmall({titleText}: props) {
  return <h3 style={{textShadow: '2px 1px 4px #919191'}} className="TitleFirst">{titleText}</h3>
}

export default TitleSmall;