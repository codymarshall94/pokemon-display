import React from 'react'

function PokemonList({pokemon}) {

  return (
    <div>{pokemon.map(poke => <div>{poke}</div>)}</div>
  )
}

export default PokemonList