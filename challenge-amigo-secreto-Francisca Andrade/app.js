const listaDeAmigos = [];

// Referencias a elementos del DOM
const input = document.getElementById('amigo');
const btnAgregar = document.querySelector('.button-add');
const btnSortear = document.querySelector('.button-draw');
const ulAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

// Función para agregar amigo
const agregarAmigo = () => {
  const nombre = input.value.trim();

  if (!nombre) {
    mostrarMensaje('⚠️ Por favor, escribe un nombre válido.');
    return;
  }

  if (listaDeAmigos.includes(nombre)) {
    mostrarMensaje('⚠️ Ese nombre ya está en la lista.');
    return;
  }

  listaDeAmigos.push(nombre);
  input.value = '';
  input.focus();
  mostrarLista();
};

// Función para mostrar la lista
const mostrarLista = () => {
  ulAmigos.innerHTML = '';
  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${amigo}`;
    ulAmigos.appendChild(li);
  });
};

// Función para sortear amigo
const sortearAmigo = () => {
  if (listaDeAmigos.length === 0) {
    mostrarMensaje('⚠️ La lista está vacía. Agrega al menos un nombre.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const ganador = listaDeAmigos[indiceAleatorio];

  ulResultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
};

// Función para mostrar mensajes
const mostrarMensaje = (mensaje) => {
  ulResultado.innerHTML = `<li>${mensaje}</li>`;
};

// Asignar eventos
btnAgregar.addEventListener('click', agregarAmigo);
btnSortear.addEventListener('click', sortearAmigo);