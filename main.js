let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let div_header = document.createElement('div');
div_header.className = "header";
contenedor.appendChild(div_header);

let div_footer = document.createElement('div');
div_footer.className = "footer";
contenedor.appendChild(div_footer);

let div_tablero = document.createElement('div');
div_tablero.className = "tablero";
contenedor.appendChild(div_tablero);

let div_progreso = document.createElement('div');
div_progreso.className = "progreso";
contenedor.appendChild(div_progreso);


DOM.appendChild(contenedor);