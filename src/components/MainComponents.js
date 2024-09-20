import React from 'react'
import usePokeDeck from '../hooks/usePokeDeck';
import PokeComp from './PokeComp';

const MainComponents = () => {
    usePokeDeck();
    return (
        <div>
            <PokeComp />
        </div>
    )
}

export default MainComponents;
