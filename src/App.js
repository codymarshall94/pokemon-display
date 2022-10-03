import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDescription from "./components/PokemonDescription";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState([]);
  
  //Get The Prev and Next Page Data.
  useEffect(() => {
    const getPageData = async () => {
      const req = await axios.get(currentPage);
      const res = req.data;
      setNextPage(res.next);
      setPrevPage(res.previous);
      setPokemon(res.results);
    };
    getPageData();
  }, [currentPage]);

  //Functions to set current page
  const goNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goPrevPage = () => {
    setCurrentPage(prevPage);
  };

  //Selecting a Pokemon
  const handleSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Setting Details of selected Pokemon
  useEffect(() => {
    const getSelectedPokemonData = async () => {
      if(selectedPokemon) {
        const req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        const res = req.data;
        
        const selectedPokemonData = {
          id: res.id,
          name: res.name,
          height: res.height,
          weight: res.weight,
          abilities: res.abilities,
          stats: res.stats,
          types: res.types,
          species: res.species.url,
          officalArt: res.sprites.other["official-artwork"].front_default,
          sprite: res.sprites["front_default"],
        };
        setSelectedPokemonDetails(selectedPokemonData);
      };
    }
    getSelectedPokemonData();
  }, [selectedPokemon]);

  return (
    <div>
      <SearchBar
        setSelectedPokemon={setSelectedPokemon}
        handleSelectedPokemon={handleSelectedPokemon}
      />
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div>
          <PokemonList
            pokemon={pokemon}
            handleSelectedPokemon={handleSelectedPokemon}
            selectedPokemonDetails={selectedPokemonDetails}
            currentPage={currentPage}
          />
          <div className="d-flex justify-content-center">
            <Pagination
              goNextPage={goNextPage}
              goPrevPage={goPrevPage}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          </div>
        </div>
        <PokemonDescription selectedPokemonDetails={selectedPokemonDetails} />
      </div>
    </div>
  );
}

export default App;
