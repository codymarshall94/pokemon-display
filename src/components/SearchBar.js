import React, {useState} from 'react'

function SearchBar({handleSelectedPokemon}) {
    const [input, setInput] = useState('');

const searchPokemon = (e) => {
    e.preventDefault();
    handleSelectedPokemon(input);
}

  return (
    <div className="searchBar">
    <form onSubmit={searchPokemon}>
      <label htmlFor="pokemon">PokeSearch:</label>
      <input type="text" value={input} name="pokemon" id="search" onChange={e => setInput(e.target.value)} placeholder="Ex: Charizard or 6"/>
      <button type='submit' />
    </form>
  </div>
  )
}

export default SearchBar