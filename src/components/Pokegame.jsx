import React from 'react'
import Pokedex from './Pokedex';
import defaultPokemon from '../assets/defaultPokemon';

const Pokegame = () => {
    // const rndPokemons = [];
    // for(let i = 0; i < defaultPokemon.length; i++){
    //     let rnd = Math.floor(Math.random() * defaultPokemon.length);
    //     rndPokemons.push(defaultPokemon[rnd]);
    // }
    // console.log(rndPokemons);
    const shuffleArray = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    }
    const hand1 = shuffleArray(defaultPokemon).slice(defaultPokemon.length / 2);
    const totExp1 = hand1.reduce((acc, p) => acc + p.base_experience, 0);
    const hand2 = shuffleArray(defaultPokemon).slice(defaultPokemon.length / 2);
    const totExp2 = hand2.reduce((acc, p) => acc + p.base_experience, 0);

    return (
        <>
            <h1>Hand 1</h1>
            <Pokedex pokemon={hand1} totExp={totExp1} isWinner={totExp1 > totExp2 ? true : false} />
            
            <h1>Hand 2</h1>
            <Pokedex pokemon={hand2} totExp={totExp2} isWinner={totExp1 < totExp2 ? true : false} />
        </>
    )
}

export default Pokegame;