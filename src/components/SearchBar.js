import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../css/searchbar.css";

function SearchBar({ handleSelectedPokemon }) {
  const [input, setInput] = useState("");

  const searchPokemon = (e) => {
    e.preventDefault();
    handleSelectedPokemon(input);
  };

  return (
    <div className="container d-flex justify-content-center search-bar">
      <form onSubmit={searchPokemon}>
        <label htmlFor="pokemon" className="search-label">Name or Number</label>
        <div className="d-flex">
          <input
            type="text"
            className="search-bar-input"
            value={input}
            name="pokemon"
            id="pokemon"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Charizard or 6"
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </div>
        <div className="search-info">
          <span>Search for a Pokemon by name or using the Pokedex number</span>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
