import React from 'react'
import { useSelector } from 'react-redux';
import PokeList from './PokeList';

const PokeComp = () => {
    const pokemons = useSelector(store => store.pokemons);
    return (
        pokemons.knownpokemons && (
            <div className='bg-black'>
                <div className='mt-0  pl-4  relative z-20'>
                    <PokeList title={"Poke Deck"} pokemons={pokemons.knownpokemons} />
                </div>


            </div>)
    )
}

export default PokeComp;
