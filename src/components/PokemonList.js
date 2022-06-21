import React from "react";
import "../css/pokemonlist.css";

function PokemonList({ pokemon, handleSelectedPokemon}) {
  return (
    <div className="container">
      {pokemon.map((poke, index) => (
        <div
          className="list-style"
          key={index}
          onClick={() => handleSelectedPokemon(poke)}
        >
          <span className="px-2">{poke[0].toUpperCase() + poke.slice(1)}</span>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
