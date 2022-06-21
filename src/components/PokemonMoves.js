import React from "react";
import "../css/pokemonmoves.css";

function PokemonMoves({ selectedPokemonDetails }) {
  return (
    <div className="container move-list">
      {selectedPokemonDetails.moves.map((move) => (
        <>
          <div>{move.move.name}</div>
        </>
      ))}
    </div>
  );
}

export default PokemonMoves;
