import React from "react";
import "../css/pokemonstats.css";

function PokemonStats({ selectedPokemonDetails }) {
  return (
    <div className="container stats-container">
      <h3 className="text-center">Base Stats</h3>
      {selectedPokemonDetails.stats.map((stat) => (
        <div className="row d-flex justify-content-center">
          <h4 className="col">{stat.stat.name}</h4>
          <span className="col">{stat["base_stat"]}</span>
          <div className="progress p-0">
            <div
              className="progress-bar"
              role="progressbar"
              style={{width: Math.floor((stat["base_stat"] / 255 * 100)) + "%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonStats;
