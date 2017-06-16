'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  if (state.pokemon == null) {
    wrapper.append(PokeGrid());
  }else {
    wrapper.append(PokedexDetails());
  }
  root.append(wrapper);
}

const state = {
    pokemons: null,
    species: null,
    status: null
}

$(_ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/',(err,json) =>{
    if (err) {return alert(err.message);}
    state.pokemons = json.pokemon_entries;
    console.log(json);
    const root = $('#root');
    render(root);
  });

  // getJSON('http://pokeapi.co/api/v2/pokemon-species/2/',(err,json) =>{
  //   if (err) {return alert(err.message);}
  //   state.species = json.flavors_text_entries;
  //   console.log(json);
  //
  //   const root = $('#root');
  //   render(root);
  // });

});
