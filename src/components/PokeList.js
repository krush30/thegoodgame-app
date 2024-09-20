import React, { useState } from 'react';
import PokeCards from './PokeCards';

const PokeList = ({ title, pokemons }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearchClick = () => {
        setFilteredPokemons(
            pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
            ));
    };


    return (
        <div className='py-6'>
            <div className='flex items-center justify-center'>
                <img src={"https://e7.pngegg.com/pngimages/906/501/png-clipart-pokeball-pokeball-thumbnail.png"} alt='pokeball' className='w-16 h-16 mr-4 rounded-full border-2 border-white shadow-lg' />
                <h1 className='text-lg text-white px-8 mb-6'>{title}</h1>
                <input
                    type='text'
                    placeholder='Search your pokemon'
                    value={searchInput}
                    onChange={handleInputChange}
                    className='px-2 py-1 border rounded-md mr-2'
                />
                <button
                    className='text-white border border-white rounded-md px-4 py-1'
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>

            <div className='overflow-x-auto no-scrollbar px-6'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {filteredPokemons.map((pokemon) => (
                        <PokeCards
                            key={pokemon.id}
                            imageUrl={pokemon.imageUrl}
                            name={pokemon.name}
                            type={pokemon.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokeList;
