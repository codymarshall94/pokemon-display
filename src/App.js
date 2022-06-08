import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState()

  useEffect(() => {
    axios
      .get(currentPage)
      .then((res) => {
        setNextPage(res.data.next)
        setPrevPage(res.data.previous)
        setPokemon(res.data.results.map(poke => poke.name))
      })
  }, [currentPage]);

  const goNextPage = () => {
    setCurrentPage(nextPage)
  }

  const goPrevPage = () => {
    setCurrentPage(prevPage)
  }

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
      <Pagination goNextPage={goNextPage} goPrevPage={goPrevPage}/>
    </div>
  );
}

export default App;
