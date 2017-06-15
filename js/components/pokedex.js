'use strict';

const pokeItem = (pokemon,update) => {
  const colcontainer = $('<div class="col-md-3"></div>');

  const figure = $('<figure class="figpoke"></figure>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img class="pokeimg">');

  figure.append(a);
  a.append(img);

  const div = $('<div class="containerspan col-md-12"></div>');
  const spancolection = $('<span class="spancolection">'+pokemon.name+'</span>');
  const spanLove = $('<span class="spanLove"></span>');
  const spanIntercambio = $('<span class="spanIntercambio"></span>');

  div.append(spancolection);
  div.append(spanLove);
  div.append(spanIntercambio);

  colcontainer.append(figure);
  colcontainer.append(div);

  return colcontainer;
}

const PokeGrid = (update) => {
  const section = $('<section id ="sectionpokedex"></section>');
  const container  = $('<div class="container"></div>');
  // buscador
  const rowbuscar = $('<div class="row"></div>');

  const colbuscar = $('<div class="col-md-12"></div>');
  const input = $('<input type="text" name="" value="">');
  rowbuscar.append(colbuscar);
  colbuscar.append(input);
  //grid de pokemons
  const rowgrid = $('<div class="row"></div>');

  section.append(container);
  section.append(rowbuscar);
  section.append(rowgrid);

  return section;
}

const reRender = (pokemonList,filtersPokemon) => {
  pokemonList.empty();

  filtersPokemon.forEach((pokemon) => {
    pokemonList.append(pokeItem(pokemon,
      _ => {reRender(pokemonList,filtersPokemon)}));
  });
}
