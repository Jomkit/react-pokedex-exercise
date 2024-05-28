import React from 'react'
import defaultPokemon from '../assets/defaultPokemon';
import Pokecard from './Pokecard';
import "../assets/css/Pokedex.css";

const Pokedex = () => {
  return (
    <div className='Pokedex'>
      <h2 className='Pokedex-title'>Pokedex</h2>
      {defaultPokemon.map( p => (
        <Pokecard key={p.id} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} name={p.name} type={p.type} base_experience={p.base_experience} />
      ))}
    </div>
  )
}

export default Pokedex;