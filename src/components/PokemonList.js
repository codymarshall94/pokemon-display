import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/pokemonlist.css";
import Loading from "./Loading";

const RenderList = ({ pokemonList, handleSelectedPokemon }) => {
  if (pokemonList) {
    return (
      <div className="pokemon-list">
        {pokemonList.map((poke, index) => (
          <div
            className="list-style"
            key={index}
            onClick={() => handleSelectedPokemon(poke.name)}
          >
            <img src={poke.image} className="list-image" alt="pokemon" />
            {poke.id}
            {poke.name}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

function PokemonList({ handleSelectedPokemon, currentPage }) {
  const [pokemonList, setPokemonList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let currentPageInfo = [];
    let pokeInfo = [];
    setLoading(true);

    const listPokemon = async () => {
      const req = await axios.get(currentPage);
      const res = await req.data.results;
      currentPageInfo.push(res);
      console.log(currentPageInfo);

      for (let i = 0; i <= res.length - 1; i++) {
        let req = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${currentPageInfo[0][i].name}`
        );
        let res = await req.data;
        pokeInfo.push(res);
      }

      const pokemon = pokeInfo.map((poke) => ({
        name: poke.name,
        id: poke.id,
        image: poke.sprites["front_default"],
      }));

      setPokemonList(pokemon);
      setLoading(false);
    };

    listPokemon();
  }, [currentPage]);

  if (loading) {
    return (
      <div className="container">
        <div>
          <h2 className="list-header">Choose a Pokemon to view information</h2>
        </div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="container d-flex flex-column justify-content-center">
        <div>
          <h2 className="list-header">Choose a Pokemon to view information</h2>
        </div>
        <RenderList
          pokemonList={pokemonList}
          handleSelectedPokemon={handleSelectedPokemon}
        />
      </div>
    );
  }
}

export default PokemonList;
