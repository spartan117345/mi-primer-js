
const edadUsuario = 15; if (edadUsuario >= 18) { console.log("¡Puedes registrarte en el torneo de mayores!"); } else if (edadUsuario >= 13) { console.log("¡Bienvenido a la categoría Juvenil!"); } else { console.log("Lo siento, necesitas ser mayor de 13 años."); }

// 1. Declarar la función 
function calcularPuntajeTotal(puntosNivel1, puntosNivel2) { let to
tal = puntosNivel1 + puntosNivel2; return "Puntaje Final: " + total; } // 2. Ejecutar (llamar) lafunción pasando argumentos 
let resultadoJugador = calcularPuntajeTotal(450, 320); console.log(resultadoJugador); // "Puntaje Final: 770"
