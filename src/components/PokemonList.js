import React from "react";
import "../css/pokemonlist.css";

function PokemonList({ pokemon, handleSelectedPokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div
          className="list-style"
          key={poke}
          onClick={() => handleSelectedPokemon(poke)}
        >
          {poke}
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
