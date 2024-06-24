let cartasVolteadas = [];
let tableroBloqueado = false;
let temporizador;

const cartas = document.querySelectorAll('.carta');
const temporizadorElemento = document.getElementById('temporizador');

function voltearCarta() {
  if (tableroBloqueado) return;
  if (this === cartasVolteadas[0]) return; // Evitar voltear la misma carta dos veces

  this.classList.add('volteada');
  cartasVolteadas.push(this);

  if (cartasVolteadas.length === 2) {
    tableroBloqueado = true; // Bloquear interacción hasta que se evalúen las cartas

    if (cartasVolteadas[0].innerHTML === cartasVolteadas[1].innerHTML) {
      // Si las cartas coinciden
      cartasVolteadas[0].classList.add('correcta');
      cartasVolteadas[1].classList.add('correcta');
      cartasVolteadas = []; // Reiniciar arreglo de cartas volteadas
      tableroBloqueado = false; // Desbloquear interacción

      // Verificar si se han completado todas las parejas
      if (document.querySelectorAll('.correcta').length === cartas.length) {
        clearInterval(temporizador); // Detener temporizador
        tableroBloqueado = true; // Bloquear tablero
        alert('¡Felicidades! Has completado el juego.');
      }
    } else {
      // Si las cartas no coinciden, voltear de nuevo después de 1 segundo
      setTimeout(() => {
        cartasVolteadas.forEach(carta => {
          carta.classList.remove('volteada');
        });
        cartasVolteadas = []; // Reiniciar arreglo de cartas volteadas
        tableroBloqueado = false; // Desbloquear interacción
      }, 1000);
    }
  }
}

// Función para mezclar aleatoriamente las cartas
function mezclarCartas() {
  cartas.forEach(carta => {
    let randomPos = Math.floor(Math.random() * 9);
    carta.style.order = randomPos; // Establecer orden aleatorio
  });
}

mezclarCartas(); // Llamar función para mezclar al cargar la página

cartas.forEach(carta => carta.addEventListener('click', voltearCarta));

// Temporizador de 30 segundos
let segundosRestantes = 30;
temporizadorElemento.textContent = `Tiempo restante: ${segundosRestantes}`;

temporizador = setInterval(() => {
  segundosRestantes--;
  temporizadorElemento.textContent = `Tiempo restante: ${segundosRestantes}`;

  if (segundosRestantes === 0) {
    clearInterval(temporizador);
    tableroBloqueado = true; // Bloquear interacción
    alert('Se acabó el tiempo. ¡Inténtalo de nuevo!');
  }
}, 1000);
