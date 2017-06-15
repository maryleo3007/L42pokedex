'use strict';

const Header = () => {
  const header = $('<header></header>');
  const nav = $('<nav class="navbar"></nav>');
  const container  = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col-md-12"></div>');
  const h1 = $('<h1>Pokedex</h1>');
  const hr = $('<hr>');

  header.append(nav);
  nav.append(container);
  container.append(row);
  row.append(col);
  col.append(h1);
  col.append(hr);

  return header;
}
