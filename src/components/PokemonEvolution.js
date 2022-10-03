import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/pokemonevolution.css";
import {BiRightArrow} from "react-icons/bi";

function PokemonEvolution({ selectedPokemonDetails }) {
  const [baseEvolution, setBaseEvolution] = useState([]);
  const [secondEvolution, setSecondEvolution] = useState([]);
  const [thirdEvolution, setThirdEvolution] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    //Get Data for base,second and third evolutions

    const getEvolutions = async () => {
      //Variables used in IF statements

      let requestBaseEvo;
      let baseEvoData;
      let requestSecondEvo;
      let secondEvoData;
      let requestThirdEvo;
      let thirdEvoData;
      let baseImage;
      let secondImage;
      let thirdImage;
      let newBaseEvolution;
      let newSecondEvolution;
      let newThirdEvolution;

      //Initial requests to get selected Pokemon species Data

      let pokeSpecies = await axios.get(selectedPokemonDetails.species);
      let speciesData = await pokeSpecies.data;
      let evolutions = await axios.get(speciesData["evolution_chain"].url);
      let evolutionsData = await evolutions.data;

      //Checking to see if the object in the array exist,then assign the data to the variable

      let base = evolutionsData.chain;
      let second =
        evolutionsData.chain["evolves_to"][0] !== undefined
          ? evolutionsData.chain["evolves_to"][0]
          : "no evolution";
      let third =
        evolutionsData.chain["evolves_to"][0] &&
        evolutionsData.chain["evolves_to"][0]["evolves_to"][0]
          ? evolutionsData.chain["evolves_to"][0]["evolves_to"][0]
          : "no evolution";

      // WORKING

      //Checking to see if the variables are TRUE, assign the data to the variable
      //Assign the image url data to the variables

      if (base !== undefined) {
        requestBaseEvo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${base.species.name}`
        );
        baseEvoData = await requestBaseEvo.data;
        baseImage = baseEvoData.sprites.other["official-artwork"].front_default;
        newBaseEvolution = { base, url: baseImage };
      } else {
        newBaseEvolution = "no evolution";
      }
      if (second !== "no evolution") {
        requestSecondEvo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${second.species.name}`
        );
        secondEvoData = await requestSecondEvo.data;
        secondImage =
          secondEvoData.sprites.other["official-artwork"].front_default;
        newSecondEvolution = { second, url: secondImage };
      } else {
        newSecondEvolution = "no evolution";
      }
      if (third !== "no evolution") {
        requestThirdEvo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${third.species.name}`
        );
        thirdEvoData = await requestThirdEvo.data;
        thirdImage =
          thirdEvoData.sprites.other["official-artwork"].front_default;
        newThirdEvolution = { third, url: thirdImage };
      } else {
        newThirdEvolution = "no evolution";
      }

      //Set state with assigned variables

      setBaseEvolution(newBaseEvolution);
      setSecondEvolution(newSecondEvolution);
      setThirdEvolution(newThirdEvolution);
      setLoading(false);
    };

    getEvolutions();
  }, [selectedPokemonDetails]);

  //Conditionally rendering divs containing evolutions if the state is True

  const LevelUpArrow = () => {
    return (
      <div className="arrow"><BiRightArrow /></div>
    )
  }

  if (loading) {
    return <div className="d-flex justify-content-center">Loading...</div>
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">

        {baseEvolution !== "no evolution" ? (
          <div className="evolution-box">
            {baseEvolution.base.species.name[0].toUpperCase() +
                baseEvolution.base.species.name.slice(1)}
            <img
              className="evolution-image"
              src={baseEvolution.url}
              alt="base evo"
            />
          </div>
        ) : null}
        {secondEvolution !== "no evolution" ? 
        <>
          <div className="d-flex justify-content-center flex-column">
            <LevelUpArrow />
            <div className="d-flex justify-content-center">LV{secondEvolution.second["evolution_details"][0]["min_level"]}</div>
          </div>
          <div className="evolution-box">
            {secondEvolution.second.species.name[0].toUpperCase() +
                secondEvolution.second.species.name.slice(1)}
            <img
              className="evolution-image"
              src={secondEvolution.url}
              alt="second evo"
            />
          </div>
          </>
         : null}
        {thirdEvolution !== "no evolution" ? (
          <>
          <div className="d-flex justify-content-center flex-column">
            <LevelUpArrow />
            <div className="d-flex justify-content-center">LV{thirdEvolution.third["evolution_details"][0]["min_level"]}</div>
          </div>
          <div className="evolution-box">
            {thirdEvolution.third.species.name[0].toUpperCase() +
                thirdEvolution.third.species.name.slice(1)}
            <img
              className="evolution-image"
              src={thirdEvolution.url}
              alt="third evo"
            />
          </div>
          </>
        ) : null}

      </div>
    );
  }
}

export default PokemonEvolution;
