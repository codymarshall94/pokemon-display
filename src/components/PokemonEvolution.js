import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/pokemonevolution.css";

function PokemonEvolution({ selectedPokemonDetails }) {
  const [baseEvolution, setBaseEvolution] = useState([]);
  const [secondEvolution, setSecondEvolution] = useState([]);
  const [thirdEvolution, setThirdEvolution] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    //Get Data for base,second and third evolutions

    const getEvolutions = async () => {
      let pokeSpecies = await axios.get(selectedPokemonDetails.species.url);
      let speciesData = (pokeSpecies.data);
      let evolutions = await axios.get(speciesData["evolution_chain"].url);
      let evolutionsData = evolutions.data;

    //Checking to see if the object properties are undefined and they arent, assign the data to the variable

      let base = evolutionsData.chain;
      let second = base !== undefined ? evolutionsData.chain["evolves_to"][0] : null;
      let third = second !== undefined ? evolutionsData.chain["evolves_to"][0]["evolves_to"][0] : null;
    
    //Setting the state with assign variables

      setBaseEvolution(base);
      setSecondEvolution(second);
      setThirdEvolution(third);
      setLoading(false);
    }

    getEvolutions();

  }, [selectedPokemonDetails]);


    //Conditionally rendering divs containing evolutions if the state is True

  if(loading){
    return <div> Loading ....</div>
  } else {
    return (
      <div className="d-flex">
        <div className="evolution-box">{baseEvolution["evolves_to"].length !== 0 ? baseEvolution.species.name : "No Evolutions"}</div>
        {secondEvolution !== undefined ? <div className="evolution-box">{secondEvolution.species.name}</div> : null}
        {thirdEvolution !== null ? <div className="evolution-box">{thirdEvolution.species.name}</div> : null}
      </div>
    )
  }

  
}

export default PokemonEvolution;
