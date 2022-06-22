import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import PokemonDescription from "./components/PokemonDescription";
import SearchBar from "./components/SearchBar";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState([]);

  //Pagination

  useEffect(() => {
    axios.get(currentPage).then((res) => {
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results.map((poke) => poke.name));
    });
  }, [currentPage]);

  const goNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goPrevPage = () => {
    setCurrentPage(prevPage);
  };

  //Selecting a Pokemon

  useEffect(() => {
    if (selectedPokemon.length !== 0) {
      axios
        .get(selectedPokemon)
        .then((res) => {
          setSelectedPokemonDetails(res.data);
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  }, [selectedPokemon]);

  const handleSelectedPokemon = (id) => {
    setSelectedPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };

  return (
    <div className="App container d-flex align-items-center flex-column">
      <SearchBar
        setSelectedPokemon={setSelectedPokemon}
        handleSelectedPokemon={handleSelectedPokemon}
      />
      <div className="container d-flex justify-content-center align-items-center border p-5">
        <div>
          <PokemonList
            pokemon={pokemon}
            handleSelectedPokemon={handleSelectedPokemon}
            selectedPokemonDetails={selectedPokemonDetails}
          />
          <Pagination
            goNextPage={goNextPage}
            goPrevPage={goPrevPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>

        <PokemonDescription selectedPokemonDetails={selectedPokemonDetails} />
      </div>
    </div>
  );
}

export default App;
