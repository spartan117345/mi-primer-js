const titulo = document.querySelector('#titulo'); 
const boton = document.querySelector('#btnBoton'); boton.addEventListener('click', () => { titulo.textContent = "¡Texto Cambiado!"; });

// app.js - Estructura del proyecto integrador 
let contador = 0; 
const valorPantalla = document.qu
erySelector('#valor'); const btnIncrementar = document.querySelector('#btn-incrementar'); const btnRestar = document.querySelector('#btn-restar'); function actualizarColor() { if (contador > 0) va
lorPantalla.style.color = "#16a34a"; if (contador < 0) valorPantalla.style.color = "#dc2626";
else valorPantalla.style.color = "#0f172a"; } btnIncrementar.addEventListener('click', () => { con
tador++; valorPantalla.textContent = contador; actualizarColor(); });