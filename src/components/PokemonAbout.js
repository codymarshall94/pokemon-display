import React from 'react';
import "../css/pokemonabout.css";

function PokemonAbout({selectedPokemonDetails}) {
  return (
    <div className="container mt-3 about-container" id="about">
              <div className="row">
                <div className="col-4">
                  <h4>Height</h4>
                </div>
                <div className="col">
                  <span>{selectedPokemonDetails.height}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <h4>Weight</h4>
                </div>
                <div className="col">
                  <span>{selectedPokemonDetails.weight}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <h4>Abilities</h4>
                </div>
                <div className="col">
                  {selectedPokemonDetails.abilities.map((ability, index) => {
                    return (
                      <span key={index} className="px-2 border">
                        {ability.ability.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
  )
}

export default PokemonAbout