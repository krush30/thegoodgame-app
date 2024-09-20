import React from 'react'

const PokeCards = ({ imageUrl, name, type }) => {
    return (
        <div className='w-48'>
            <img
                src={imageUrl}
                alt={name}
                className='w-full h-64 object-cover rounded-lg'
            />
            <h4 className='text-white mt-2 text-center'>name: {name}</h4>
            <h4 className='text-yellow-400 text-center'>type: {type}</h4>
        </div>
    )
}

export default PokeCards;
