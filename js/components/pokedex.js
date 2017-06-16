'use strict';

const pokeItem = (pokemon,update) => {

  const colcontainer = $('<div class="col-md-3"></div>');
  const divcontentPoke = $('<div class="contentPoke"></div>');
  const figure = $('<div class="figpoke"></div>');
  const a = $('<a ></a>');
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

  const modalfade = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  </div>');
  const modalDialog = $('<div class="modal-dialog" role="document"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const modalBody = $('<div class="modal-body"></div>');
  const modalFooter = $('<div class="modal-footer">s,ndsdc,sdnc</div>');

  modalfade.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader);
  modalContent.append(modalBody);
  modalContent.append(modalFooter);

  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const h4modalTitle = $('<h4 class="modal-title" id="myModalLabel">Modal title</h4>');

  modalHeader.append(buttonclose);
  modalHeader.append(h4modalTitle);

  const description = $('<div></div>')
  const textDescription = $('<p>'+pokemon.species+'</p>');

  // divcontentPoke.append(modalfade);
  //$('#myModal').modal();

  // a.on('click', _ => {
  //   // getJSON('http://pokeapi.co/api/v2/pokemon-species/2/'
  //   getJSON('http://pokeapi.co/api/v2/pokemon-species/'+pokemon.entry_number+'/',(err,json) =>{
  //     if (err) {return alert(err.message);}
  //     state.species = json.flavors_text_entries.flavor_text;
  //
  //     const root = $('#root');
  //     render(root);
  //   });
  //   update();
  // });


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
