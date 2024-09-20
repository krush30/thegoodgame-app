import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addKnownPokemon } from '../utils/pokeSlice';

const usePokeDeck = () => {
    const dispatch = useDispatch();

    const PokemonsFetcher = async () => {
        try {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
            const json = await data.json();

            const pokemonsDetails = await Promise.all(
                json.results.map(async (pokemon) => {
                    const pokemonDetail = await fetch(pokemon.url);
                    const detailJson = await pokemonDetail.json();
                    console.log(detailJson);

                    return {
                        ...pokemon,
                        imageUrl: detailJson.sprites.front_default,
                        type: detailJson?.types[0].type.name,
                        id: detailJson.id
                    };
                })
            );

            console.log(pokemonsDetails);
            dispatch(addKnownPokemon(pokemonsDetails));
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    useEffect(() => {
        PokemonsFetcher();
    }, []);

    return <div></div>;
};

export default usePokeDeck;
