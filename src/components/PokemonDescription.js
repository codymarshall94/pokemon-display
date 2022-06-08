import React from "react";
import "../css/pokemondescription.css";

const RenderPokemonDetails = ({ selectedPokemonDetails }) => {
  if (selectedPokemonDetails.length !== 0) {
    return (
      <>
        <div className="container pokemon-container">
          <div className="pokemon-content">
            <h1>{selectedPokemonDetails.name}</h1>
          </div>
          <div className="pokemon-content">
            <img
              src={selectedPokemonDetails.sprites.other.home.front_default}
              className="pokemon-image"
            />
          </div>
          <div className="pokemon-content">
              <h4>Type</h4>
          </div>
          <div className="pokemon-content">
            <div>
              <h4>Height</h4>
              <span>{selectedPokemonDetails.height}</span>
            </div>
            <div>
              <h4>Weight</h4>
              <span>{selectedPokemonDetails.weight}</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div />;
  }
};

function PokemonDescription({ selectedPokemonDetails }) {
  return (
    <>
      <RenderPokemonDetails selectedPokemonDetails={selectedPokemonDetails} />
    </>
  );
}

export default PokemonDescription;
