import React from 'react';
import "../assets/css/Pokecard.css";

const Pokecard = ({ name, img, type, base_experience }) => {
  return (
    <div className='Pokecard'>
      <h3 className='Pokecard-title'>{ name }</h3>
      <img src={ img } alt="Pokemon Image" />
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  )
}

export default Pokecard;