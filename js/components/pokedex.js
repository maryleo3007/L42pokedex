'use strict';

const pokeItem = (pokemon,update) => {

  const colcontainer = $('<div class="col-md-3"></div>');
  const divcontentPoke = $('<div class="contentPoke"></div>');
  const figure = $('<div class="figpoke"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img class="pokeimg center" src="http://serebii.net/art/th/'+pokemon.entry_number+'.png">');

  figure.append(a);
  a.append(img);

  const div = $('<div class="containerspan"></div>');
  const spancolection = $('<img class=" center" src="assets/icon/valentines-heart.png">');
  const spanLove = $('<img class=" center" src="assets/icon/pokeball_gray.png">');
  const spanIntercambio = $('<img class=" center" src="assets/icon/data.png">');
  const pcolection = $('<p id= "pcolection" class="text-center text-uppercase"><strong>'+pokemon.pokemon_species.name+'</strong></p>');

  div.append(spancolection);
  div.append(spanLove);
  div.append(spanIntercambio);

  const divnmbre = $('<div class="containername col-md-12"></div>');

  //divnmbre.append(pcolection);

  colcontainer.append(divcontentPoke);
  divcontentPoke.append(figure);
  divcontentPoke.append(div);
  divcontentPoke.append(pcolection);
  colcontainer.append(divnmbre);
  divnmbre.append(PokedexDetails());

  let doublePoke = colcontainer.map((x)=>{ return x});
  a.on('click',function () {

    $('.pokecolContainer').html("");
    $('.pdescription').html("");
    $('.altura').html("");
    $('.peso').html("");
    $('.categoria').html("");
    $('.habilidad').html("");
    $('.tipoPoke1').html("");
    $('.tipoPoke2').html("");

    $.get(pokemon.pokemon_species.url,(data) => {
      console.log(data);
      let pokemon = doublePoke.prevObject[0];
      let valor = data.flavor_text_entries[3].flavor_text;
      $('.pokecolContainer').html(pokemon);
      $('.pdescription').html(valor);
      $('.altura').html(pokemon.pokemon_species.height);
      $('.peso').html(pokemon.pokemon_species.weight);
      $('.categoria').html(pokemon.pokemon_species.shape.name);
      $('.habilidad').html(pokemon.abilities.name);
      $('.tipoPoke1').html(pokemon.types[0].type.name);
      $('.tipoPoke2').html(pokemon.types[1].type.name);

     })
  });

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
  container.append(rowbuscar);
  container.append(rowgrid);


  input.on('keyup',(e)=>{
    const pokemosFilters = filterPokemon(state.pokemons,input.val());
    reRender(rowgrid,pokemosFilters);
  });

  reRender(rowgrid,filterPokemon(state.pokemons,""));

  return section;
}

const reRender = (pokemonList,filtersPokemon) => {
  pokemonList.empty();
  const pokelis = state.pokemons.pokemon_species;
  filtersPokemon.forEach((pokelis) => {
    pokemonList.append(pokeItem(pokelis,
      _ => {reRender(pokemonList,filtersPokemon)}));
  });
}
