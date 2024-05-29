import React from 'react'
import Pokecard from './Pokecard';
import "../assets/css/Pokedex.css";

const Pokedex = ({pokemon, totExp, isWinner=false}) => {
  return (
    <div className='Pokedex'>
      <h2 className='Pokedex-title solo-center'>Pokedex</h2>
      <h3 className='solo-center'>{isWinner ? "This Hand Wins!" : ""}</h3>
      {pokemon.map( p => (
        <Pokecard key={p.id} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} name={p.name} type={p.type} base_experience={p.base_experience} />
      ))}
      <p className='Pokedex-total-exp solo-center'><b>Total Exp:</b> {totExp}</p>
    </div>
  )
}

export default Pokedex;