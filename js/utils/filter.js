'use strict';

const filterPokemon = (pokemons,valueInput) => {

  return pokemons.filter((pokemons)=>{
    return pokemons.pokemon_species.name.toLowerCase().indexOf(valueInput.toLowerCase()) != -1;
  });
}
