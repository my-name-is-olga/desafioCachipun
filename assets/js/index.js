let cantidadJuegos = prompt("¿Cuántas veces te gustaría jugar Cachipún?");
let ganaUsuario = 0;
let ganaMaquina = 0;

for (let i = 0; i < cantidadJuegos; i++) {
  let jugadaUsuario = prompt(
    "Escribe 0 para PIEDRA, 1 para PAPEL o 2 para TIJERAS"
  );
  let jugadaMaquina = Math.floor(Math.random() * 3);

  switch (jugadaUsuario) {
    case "0":
      if (jugadaMaquina === 0) {
        alert(
          "Tu contrincante también escogió PIEDRA. Esta jugada es un empate."
        );
      } else if (jugadaMaquina === 1) {
        alert("Tu contrincante escogió PAPEL. Has perdido en esta jugada.");
      } else if (jugadaMaquina === 2) {
        alert("Tu contrincante escogió TIJERAS. ¡Felicidades! Has ganado.");
      }
      break;

    case "1":
      if (jugadaMaquina === 0) {
        alert(
          "Tu contrincante también escogió PAPEL. Esta jugada es un empate."
        );
      } else if (jugadaMaquina === 1) {
        alert("Tu contrincante escogió TIJERAS. Has perdido en esta jugada.");
      } else if (jugadaMaquina === 2) {
        alert("Tu contrincante escogió PIEDRA. ¡Felicidades! Has ganado.");
      }
      break;

    case "2":
      if (jugadaMaquina === 0) {
        alert(
          "Tu contrincante también escogió TIJERAS. Esta jugada es un empate."
        );
      } else if (jugadaMaquina === 1) {
        alert("Tu contrincante escogió PIEDRA. Has perdido en esta jugada.");
      } else if (jugadaMaquina === 2) {
        alert("Tu contrincante escogió PAPEL. ¡Felicidades! Has ganado.");
      }
      break;
  }
}

if (ganaUsuario > ganaMaquina) {
  document.write(
    "¡FELICIDADES! De acuerdo al total de juegos, has sido el GANADOR."
  );
} else if (ganaUsuario < ganaMaquina) {
  document.write(
    "De acuerdo al total de juegos has perdido. Puedes intentarlo nuevamente ¡Suerte!"
  );
} else if (ganaUsuario == ganaMaquina) {
  document.write(
    "De acuerdo al total de juegos, ha sido un empate. Puedes intentarlo nuevamente ¡Suerte!"
  );
}
