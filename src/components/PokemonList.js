//import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/pokemonlist.css";


const RenderList = ({ pokemon ,handleSelectedPokemon }) => {

  /*
  const [listItems, setListItems] = useState([]);

 useEffect(() => {
 

     const getListItems = async () => {
      const pokeData = [];
      if(pokemon){
        pokemon.map(async(poke) => {
          const req = await axios.get(poke.url);
          const res = {
            name: req.data.name,
            id: req.data.id,
            sprite: req.data.sprites["front_default"],
          }
          pokeData.push(res);
        });
        
        console.log(pokeData);
      }
    }
    getListItems();
  }, [pokemon]); 
  */

  
  if (pokemon) {
    return (
      <div className="pokemon-list">
        {pokemon.map((poke, index) => (
          <div
            className="list-style"
            key={index}
            onClick={() => handleSelectedPokemon(poke.name)}
          >
            {poke.name}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
}
}

function PokemonList({ pokemon, handleSelectedPokemon }) {
    return (
      <div className="container d-flex flex-column justify-content-center">
        <div>
          <h2 className="list-header">Choose a Pokemon to view information</h2>
        </div>
        <RenderList
          pokemon={pokemon}
          handleSelectedPokemon={handleSelectedPokemon}
        />
      </div>
    );
}

export default PokemonList;
