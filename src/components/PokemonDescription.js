import React, { useState } from "react";
import "../css/pokemondescription.css";
import CategorySelector from "./CategorySelector";
import PokemonAbout from "./PokemonAbout";
import PokemonEvolution from "./PokemonEvolution";
import PokemonMoves from "./PokemonMoves";
import PokemonStats from "./PokemonStats";



const RenderPokemonDetails = ({
  selectedPokemonDetails,
  category,
  setCategory,
}) => {

  const paddedIndex = ("00" + selectedPokemonDetails.id).slice(-3);



  if (selectedPokemonDetails.length !== 0) {
    let typeStyleOne = selectedPokemonDetails.types[0].type.name;

    return (
      <>
        <div className={`container pokemon-container ${typeStyleOne}`}>
          {/* Top Half of Pokemon Display Card */}

          <div className="pokemon-content">
            <h1>
              {selectedPokemonDetails.name[0].toUpperCase() +
                selectedPokemonDetails.name.slice(1)}{" "}
            </h1>
          </div>
          <span className="dex-num-text">{paddedIndex}</span>
          <div className="pokemon-content">
            {selectedPokemonDetails.types.map((type, index) => {
              return (
                <span key={index} className="type-pill">
                  {type.type.name}
                </span>
              );
            })}
          </div>
          <div className="pokemon-content">
            <img
              src={
                selectedPokemonDetails.officalArt
              }
              className="pokemon-image"
              alt="pokemon"
            />
          </div>

          {/* Bottom Half of Pokemon Display Card */}

          <div className="pokemon-content bottom-half">
            <CategorySelector setCategory={setCategory} />

            {category === "about" ? (
              <PokemonAbout selectedPokemonDetails={selectedPokemonDetails} />
            ) : null}
            {category === "stats" ? (
              <PokemonStats selectedPokemonDetails={selectedPokemonDetails} />
            ) : null}
            {category === "evolution" ? (
              <PokemonEvolution
                selectedPokemonDetails={selectedPokemonDetails}
              />
            ) : null}
            {category === "moves" ? (
              <PokemonMoves selectedPokemonDetails={selectedPokemonDetails} />
            ) : null}
          </div>
        </div>
      </>
    );
  } else {
    return <div />;
  }
};

function PokemonDescription({ selectedPokemonDetails }) {
  const [category, setCategory] = useState("about");

  return (
    <>
      <RenderPokemonDetails
        selectedPokemonDetails={selectedPokemonDetails}
        category={category}
        setCategory={setCategory}
      />
    </>
  );
}

export default PokemonDescription;
