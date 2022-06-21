import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonEvolution({ selectedPokemonDetails }) {
  const [species, setSpecies] = useState([]);
  const [prevEvolution, setPrevEvolution] = useState();
  const [nextEvolution, setNextEvolution] = useState();

  useEffect(() => {
    async function getSpecies() {
     await axios.get(selectedPokemonDetails.species.url).then((res) => {
        setSpecies(res.data);
      })
    }
    getSpecies();
  }, [selectedPokemonDetails]);

  return <div></div>;
}

export default PokemonEvolution;
