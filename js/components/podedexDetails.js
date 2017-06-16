const PokedexDetails = () => {

const modalfade = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  </div>');
const modalDialog = $('<div class="modal-dialog" role="document"></div>');
const modalContent = $('<div class="modal-content"></div>');
const modalHeader = $('<div class="modal-header"></div>');
const modalBody = $('<div class="modal-body"></div>');


modalfade.append(modalDialog);
modalDialog.append(modalContent);
modalContent.append(modalHeader);
modalContent.append(modalBody);

const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
const h4modalTitle = $('<h4 class="modal-title" id="myModalLabel">Modal title</h4>');

modalHeader.append(buttonclose);
modalHeader.append(h4modalTitle);

// const description = $('<div></div>')
// const textDescription = $('<p>'+pokemon.species+'</p>');
//
//
//   $('#myModal').modal()                      // initialized with defaults
//   $('#myModal').modal({ keyboard: false })   // initialized with no keyboard
//   $('#myModal').modal('show')
return modalfade;
}
