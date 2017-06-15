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
    status: null
}

$(_ => {

  getJSON('pokemons.json',(err,json) =>{
    if (err) {return alert(err.message);}
    state.pokemons = json;

    const root = $('#root');
    render(root);
  });
  // implementar el get json
});
