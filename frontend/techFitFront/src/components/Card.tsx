import React from 'react';

interface props {
  titleCard: string;
  textCard: string;
}

function Card({titleCard, textCard}: props) {
  return (
    <div className="card">
      <h4>{titleCard}</h4>
      <p>{textCard}</p>
    </div>
  );
}

export default Card;