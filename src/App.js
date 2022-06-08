import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import PokemonDescription from "./components/PokemonDescription";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  console.log(selectedPokemon);
  console.log(selectedPokemonDetails);
  console.log(pokemon);

  useEffect(() => {
    axios.get(currentPage).then((res) => {
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results.map((poke) => poke.name));
    });
  }, [currentPage]);

  const handleSelectedPokemon = (id) => {
    setSelectedPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };

  useEffect(() => {
    if (selectedPokemon.length !== 0) {
      axios.get(selectedPokemon).then((res) => {
        setSelectedPokemonDetails(res.data);
      });
    }
  }, [selectedPokemon]);

  const goNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goPrevPage = () => {
    setCurrentPage(prevPage);
  };

  return (
    <div className="App">
      <PokemonList
        pokemon={pokemon}
        handleSelectedPokemon={handleSelectedPokemon}
      />
      <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage} />
      <PokemonDescription selectedPokemonDetails={selectedPokemonDetails} />
    </div>
  );
}

export default App;
